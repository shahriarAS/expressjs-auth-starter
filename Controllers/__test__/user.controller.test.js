const { debug } = require("console");
const request = require("supertest");
const app = require("../../app.js")

describe("User Controller Test", () => {
    test("POST /user/register", (done) => {
        request(app)
            .post("/user/register")
            .send({
                username: "shahriar",
                email: "shahriar@gmail.com",
                password: "mynamshovon"
            })
            .expect(200)
            .then((res) => {
                debug("/user/register ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /user/verify-email/:username/:randString", (done) => {
        request(app)
            .post("/user/verify-email/shahriar/l55byymxffanblwcw4")
            .expect(200)
            .then((res) => {
                debug("/user/verify-email/:username/:randString ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /user/login", (done) => {
        request(app)
            .post("/user/login")
            .send({
                usernameOrEmail: "shahriar",
                password: "mynamshovon"
            })
            .expect(200)
            .then((res) => {
                debug("/user/login ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("GET /user/view", (done) => {
        request(app)
            .get("/user/view")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .expect(200)
            .then((res) => {
                debug("/user/view ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /user/forgot-pass", (done) => {
        request(app)
            .post("/user/forgot-pass")
            .send({
                email: "shahriar@gmail.com"
            })
            .expect(200)
            .then((res) => {
                debug("/user/forgot-pass ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /user/reset-pass/:username/:randString", (done) => {
        request(app)
            .post("/user/reset-pass/shahriar/l55fnce7vv1s1pt9hh")
            .send({
                newPassword: "mynamshovon2"
            })
            .expect(200)
            .then((res) => {
                debug("/user/reset-pass/:username/:randString ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /user/change-pass", (done) => {
        request(app)
            .post("/user/change-pass")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .send({
                oldPassword: "mynamshovon2",
                newPassword: "mynamshovon3"
            })
            .expect(200)
            .then((res) => {
                debug("/user/change-pass ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /user/delete-user", (done) => {
        request(app)
            .post("/user/delete-user")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .send({
                password: "mynamshovon3",
            })
            .expect(200)
            .then((res) => {
                debug("/user/delete-user ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });


});
