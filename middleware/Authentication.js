import jwt from 'jsonwebtoken'

export const Authentication = async(req, res, next) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];
    if(!token) return res.sendStatus(401);
    if(token !== req.cookies.token) return res.sendStatus(403);
    jwt.verify(token, process.env.TOKEN, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.userId = decoded.userId;

        next();
    })
}