/**
 * @openapi
 * /v1/user/{userUuid}/password/:
 *  put:
 *    tags:
 *      - User
 *    description: Edit user password
 *    parameters:
 *      - in: header
 *        name: token
 *        required: true
 *        schema:
 *          type: string
 *        example: Bearer token
 *      - in: path
 *        name: userUuid
 *        required: true
 *        schema:
 *          type: string
 *        exemple: 80b87214-72b5-4c62-a47f-10e6156844f5
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *              oldPassword:
 *                type: string
 *            required:
 *              - password
 *              - oldPassword
 *          example:
 *            password: Supersup13!
 *            oldPassword: Password13!
 *    responses:
 *      201:
 *        description: User password changed
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *      401:
 *        description: Error user password
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 */