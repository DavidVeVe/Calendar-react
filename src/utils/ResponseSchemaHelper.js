import { VIEWS } from '../../reactModules/common/componentHelper';
import utils from './objects';

class ResponseSchemaHelper {
  constructor() {
    this.init();
  }

  setStatus(status) {
    this.status = status;
    return this;
  }

  setData(data) {
    this.data = data;
    return this;
  }

  setView(view) {
    this.view = view;
    return this;
  }

  setSuccessView() {
    this.view = VIEWS.success;
    return this;
  }

  setMessage(message) {
    this.message = message;
    return this;
  }

  setMessageKey(messageKey) {
    this.messageKey = messageKey;
    return this;
  }

  get() {
    const response = { status: this.status, data: this.data };
    if (this.view) {
      response.view = this.view;
    }
    if (this.message) {
      response.message = this.message;
    }
    if (this.messageKey) {
      response.messageKey = this.messageKey;
    }
    return response;
  }

  static getError(error, errorData) {
    const response = (error && error.response) || {};
    const { status, data } = response;
    const errorResponse = {
      status,
      message: data || '',
      data: { ...errorData },
    };
    return Promise.reject(errorResponse);
  }

  /**
   * Creates and handles data for success responses
   * @param {object} response - request response
   * @param {function} createSuccessDataFn - called if success response to create response data
   */
  static createSuccessResponse(response = {}, createSuccessDataFn) {
    if (response.status !== 200) {
      throw response;
    }
    if (utils.isFunction((createSuccessDataFn))) {
      return new ResponseSchemaHelper()
        .setStatus(200).setData(createSuccessDataFn(response)).get();
    }
    return null;
  }

  init() {
    this.status = null;
    this.data = null;
    this.view = null;
    this.message = null;
    this.messageKey = null;
    return this;
  }

  /**
   * Creates custom response
   * @param {int} status - status response
   * @param {*} data - data response
   */
  static create(status, data) {
    return new ResponseSchemaHelper()
      .setStatus(status).setData(data).get();
  }
}

export default ResponseSchemaHelper;
