/**
 * @openapi
 * /v1/certificate/:
 *  post:
 *    tags:
 *      - Certificate
 *    description: Add a new certificate
 *    parameters:
 *      - in: header
 *        name: token
 *        required: true
 *        schema:
 *          type: string
 *        example: Bearer token
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
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