import request from "./request";
import Mock from "mockjs";

//获取博客列表数据
/**
 *
 * @param page 当前页码
 * @param limit 页容量
 * @param categoryid 所属分类，-1表示全部
 * @param keyword 模糊查询的关键字
 * @returns {Promise} 返回一个promise，其状态数据为请求到的数据
 */
export async function getBlogs(page= 1,
                               limit= 20,
                               categoryid= -1,
                               keyword=""){
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    })
}

//获取所有博客的分类
export async function getBlogTypes(){
    return await request.get("/api/blogtype")
}

//获取单个博客文章
export async function getBlogArticle(id){
    return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param commentInfo 评论信息
 */
export async function postComment(commentInfo){
    return await request.post(`/api/comment`, commentInfo);
}

//分页获取评论
export async function getComments(blogId, page=1, limit=10){
    return await request.get("/api/comment", {
        params: {
            blogId,
            page,
            limit
        }
    })
}



