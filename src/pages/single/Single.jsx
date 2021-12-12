import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import React from "react";
import {useParams, useLocation} from 'react-router-dom'

export default function Single() {
    const title = useLocation();
    const useQuery = () => {        
        const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
      }
    const query = useQuery();
    console.log(query);

    return (
        <div className="single">
            <SinglePost />
             {/* <SinglePost title={props.title} content={props.content}/> */}
            <Sidebar/>
        </div>
    )
}
