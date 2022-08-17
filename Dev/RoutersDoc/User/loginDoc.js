/**
 * @openapi
 * /v1/user/:
 *  put:
 *    tags:
 *      - User
 *    description: Login users and get jwt token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *            required:
 *              - username
 *              - password
 *          example:
 *            username: guikouse
 *            password: Password13!
 *    responses:
 *      201:
 *        description: Utilisateur login avec succés
 *        schema:
 *          type: object
 *          properties:
 *            user:
 *              type: "object"
 *              properties:
 *                uuid:
 *                  type: string
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *                type:
 *                  type: object
 *                  properties:
 *                    uuid:
 *                      type: string
 *                    name:
 *                      type: string
 *                enable:
 *                  type: boolean
 *            token:
 *              type: "string"
 *      401:
 *        description: Erreur lors du login
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: "string"
 */