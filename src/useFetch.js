/*
 * @Author: zixuan.he hzx1125@outlook.com
 * @Date: 2023-08-02 11:44:04
 * @LastEditors: zixuan.he hzx1125@outlook.com
 * @LastEditTime: 2023-08-02 12:00:49
 * @FilePath: \dojo-blog\src\useFetch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url) 
            .then(res => {
                if (!res.ok) {
                    throw Error('Couldn\'t fetch the data');
                }

                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
        }, 1000)
        
    }, [url])

    return { data, isPending, error }


}
 
export default useFetch;