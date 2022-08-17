/**
 * @openapi
 * /v1/user/{userUuid}/type/:
 *  put:
 *    tags:
 *      - User
 *    description: Edit user type
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
 *              type:
 *                type: string
 *            required:
 *              - type
 *          example:
 *            type: 80b87214-72b5-4c62-a47f-10e6156844f5
 *    responses:
 *      201:
 *        description: User type changed
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *      401:
 *        description: Error user type
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 */