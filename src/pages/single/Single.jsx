import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import React from "react";
import {useLocation} from 'react-router-dom'
import axios from "axios";

export default function Single() {
    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const query = useQuery();
    const titles = query.get('title')
    const content = query.get('content')
    const id = query.get('id')
    const [dynamicContent, setDynamicContent] = React.useState(content);
    const handleSubmit = (value) => {
        axios.put(`https://61a9984633e9df0017ea3e6d.mockapi.io/api/v1/articles/${id}`, {
                content: value,
            }
        ).then(res => {
            console.log('ress',res.data.content);
            setDynamicContent(res.data.content)
        });
    }

    return (
        <div className="single">
              <SinglePost title={titles} content={dynamicContent} id={id} handleSubmit={handleSubmit} />
            <Sidebar/>
        </div>
    )
}
