/**
 * @openapi
 * /v1/user/{userUuid}:
 *  put:
 *    tags:
 *      - User
 *    description: Edit one user
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
 *              email:
 *                type: string
 *              username:
 *                type: string
 *            required:
 *              - email
 *              - username
 *          example:
 *            email: guillaume.corbet@epitech.eu
 *            username: guikouse
 *    responses:
 *      201:
 *        description: User changed
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *      401:
 *        description: Error changed user
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 */