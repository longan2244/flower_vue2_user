import ajax from "@/api/req.js"

export const getimgid = (uid) => {
  return ajax({
    method: 'get',
    url: "/api/getimgid",
    params: {
      uid,
    }
  })
} 