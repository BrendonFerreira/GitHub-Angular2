import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import HttpClient = http.HttpClient;

@Injectable()
export class MegaContentAPIService {

  constructor() {
  }

  private apiPath: string = "http://smart.megacontent.com.br/api/v1";

  public getMedias() {
    return new RequestBuild()
      .auth()
      .method('get')
      .url('media')
      .build();
  }

  public getStations() {
    return new RequestBuild()
      .auth()
      .method('get')
      .url('station')
      .build();
  }
}

class RequestBuild {

  private request;
  private http;
  constructor( @Inject(Http) http?: Http ){
    this.http = http;
  }

  auth(type?: String) {
    this.request.headers = {
      "Content-Type": type || "application/json",
      "authentication": localStorage.getItem("token") || null
    };
    return this;
  }

  setContentType(type) {
    this.request.headers["Content-Type"] = type;
    return this;
  }

  setUploadEventHandler(handlers) {
    this.request.uploadEventHandlers = handlers;
    return this;
  }

  addHeader(attr, value) {
    this.request.headers[attr] = value;
    return this;
  };

  removeHeader(attr) {
    delete this.request.headers[attr];
    return this;
  }

  transformRequest(transformer) {
    this.request.transformRequest = transformer;
    return this;
  }

  url(url) {
    this.request.url = url;
    return this;
  }

  method(method) {
    this.request.method = method;
    return this;
  }

  data(data) {
    this.request.data = data;
    return this;
  }

  params(params) {
    this.request.params = params;
    return this;
  }

  build() {
    return this.http[this.request.method](this.request.url, this.request);
  }

}
