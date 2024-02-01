/**
 * @swagger
 * tags:
 *  name:Auth
 *  description:Auth module and routes
 */

/**
 * @swagger
 *   components:
 *       schemas:
 *          SendOTP:
 *             type:object
 *             required:
 *                 -    mobile
 *             properties:
 *                 mobile:
 *                    type:string
 *            CheckOTP:
 *             type:object
 *             required:
 *                 -    mobile
 *                 -    code
 *             properties:
 *                 mobile:
 *                    type:string
 *                  code:
 *                    type:string
 */

/**
 * @swagger
 *
 * /auth/send-otp:
 *  post:
 *       summary:login with otp in this endpoint
 *       tags:
 *           -  Auth
 *       requestBody:
 *           content:
 *               application/x-www-form-urlencoded"
 *                        schema:
 *                           $ref:"#/components/schemas/SentOTP"
 *             responses:
 *               200:
 *                  descrription:success
 */

/**
 * @swagger
 *
 * /auth/check-otp:
 *  post:
 *       summary:check otp for login user
 *       tags:
 *           -  Auth
 *       requestBody:
 *           content:
 *               application/x-www-form-urlencoded"
 *                        schema:
 *                           $ref:"#/components/schemas/CheckOTP"
 *               application/json"
 *                        schema:
 *                           $ref:"#/components/schemas/CheckOTP"
 *             responses:
 *               200:
 *                  descrription:success
 */
