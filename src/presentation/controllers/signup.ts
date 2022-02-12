import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: {
        name: 'marcio',
        email: 'marcio@gmail.com'
      }
    }
  }
}
