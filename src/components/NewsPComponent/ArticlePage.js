import {useLocation} from 'react-router-dom';
import articleStyle from './articleStyle.module.css'
export const Article = ()=>{
    const location = useLocation()
    console.log(location.state)
    const style = articleStyle
    return(
       
        <div className={style.container}>
            <div className={style.leftContainer}>
                <div className={style.imgHolder}><img src={`http://20.229.216.236/uploads/news/${location.state.photo}`} /> </div>
                <div className={style.authorHolder}>
                <img/><p>{location.state.author} | {location.state.date.split("T")[0]
                .replaceAll("-", ".")
                .split(".")
                .reverse()
                .join(".")}</p>
                </div>
            </div>
            <div className={style.rightContainer}>
                <h1>{location.state.hedline}</h1>
                <p>{location.state.content}</p>
                <div className={style.tagHolder}>
                    {location.state.tags.map(tag=>{
                        return <p className={style.tags}>#{tag}</p>
                    })}
                </div>
            </div>
           
        </div>
    )
}