/**
 * @openapi
 * /v1/user/{userUuid}:
 *  delete:
 *    tags:
 *      - User
 *    description: Disable user
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
 *    responses:
 *      201:
 *        description: User disable
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *      401:
 *        description: Error during disable
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 */