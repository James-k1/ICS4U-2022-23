const LocalStrategy = require('passport-local').Strategy 
const bcrypt = require('bcrypt')


function init(passport, getUserByEmail, getUserById){
    const authenticate = async (email, password, done) =>{
        const user = getUserByEmail(email)
     
        if (user == null){

            return done(null, false)
        }
        try {
            if (await bcrypt.compare(password, user.password)){

                return done(null, user)
            }else {

                return done(null, false)
            } 
        } catch (error) {

            return done(error)
            
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}, authenticate))
    passport.serializeUser((user, done) => {
        done(null,user.id)
    })
    passport.deserializeUser((id, done) => {
        let user = getUserById(id)
        console.log(user)
        return done(null, getUserById(id))
    })
    

}
module.exports = init