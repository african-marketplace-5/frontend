import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import EditForm from './editForm'
import axios from 'axios'

//THIS MODULE IS FOR TESTING PURPOSES - it should be deleted before final submission

function DeleteMe (props){
    const [itemList, setItemList] = useState([])

    const user_id = 1
    const callLink = `https://african-marketplace-5.herokuapp.com/api/user_items/filter/${user_id}`
    const { url, path } = useRouteMatch()

    useEffect(() => {
        axios.get(callLink)
            .then(res => setItemList(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(itemList)

    return (
        <EditForm item={itemList[0]} user_id={user_id} />
    )
}

export default DeleteMe