import React, { useEffect, useState } from "react";
import MainStyle from "./TeamMainStyle.module.scss";
import Cards from "./Cards";
import TeamMemberInfo from "./TeamMemberInfo";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMemberData } from "../../hooks/TeamPageHook/TeamMemberData";
import { InfoData } from "../../hooks/TeamPageHook/TeamMemberInfoData";
import axios from "axios";

const TeamMainPage = () => {
  const [teamMembers, setTeamMembers] = useState();
  const [displayMemberId, setDisplayMemberId] = useState();
  const [memberInfo, setTeamMemberInfo] = useState("0");
  useEffect(() => {
    axios
      .get("/phiramenca/api/v1/team/members")
      .then((res) => {
        setTeamMembers(res.data.allMembers);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log(displayMemberId);
    axios
      .post("/phiramenca/api/v1/team/teamMember", {
        id: displayMemberId,
      })
      .then((res) => setTeamMemberInfo(res.data));
  }, [displayMemberId]);
  const style = MainStyle;
  //---------------------------------------------------
  const cardElements = teamMembers?.map((card) => {
    return (
      <Cards card={card} infoToDisplay={setDisplayMemberId} key={card._id} />
    );
  });
  //---------------------------------------------------
  const centerCard = TeamMemberData.map((card) => {
    return <TeamMemberCard card={memberInfo} key={card.id} />;
  });
  //---------------------------------------------------
  const rightCard = InfoData.map((card) => {
    return <TeamMemberInfo card={memberInfo} key={card.id} />;
  });
  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        <h1 className={style.container_leftSide_header}>Tim:</h1>
        <p className={style.container_leftSide_paragraph}>20 godina iskustva</p>
        {cardElements}
      </div>
      {displayMemberId ? centerCard : ""}
      {displayMemberId ? (
        rightCard
      ) : (
        <p className={style.container_extra}>
          Hey our team is amazing read more about them
        </p>
      )}
    </div>
  );
};

export default TeamMainPage;
