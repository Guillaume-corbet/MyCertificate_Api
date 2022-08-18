/**
 * @openapi
 * /v1/certificate/:
 *  get:
 *    tags:
 *      - Certificate
 *    description: Get all certificate
 *    parameters:
 *      - in: header
 *        name: token
 *        required: true
 *        schema:
 *          type: string
 *        example: Bearer token
 *      - in: query
 *        name: userUuid
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: Get all certificate
 *        schema:
 *          type: object
 *          properties:
 *            files:
 *              type: object
 *              properties:
 *                uuid:
 *                  type: string
 *                name:
 *                  type: string
 *                public:
 *                  type: boolean
 *                enable:
 *                  type: boolean
 *      401:
 *        description: Error getting certificate
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 */