import { Cookie, Headers, HttpMethod } from 'puppeteer'

declare namespace MerryMaker {
  /** Scan ID associated with event (UUIDv4) */
  type ScanID = string

  type ScanEventType = 'page-error'
  | 'console-message'
  | 'worker-created'
  | 'cookie'
  | 'request'
  | 'response-error'
  | 'function-call'
  | 'script-response'
  | 'error'

  type ScanEventPayload = WebPageError
  | WebConsoleMessage
  | WebWorkerCreated
  | WebCookies
  | WebRequestEvent
  | WebResponseError
  | WebFunctionCallEvent
  | WebScriptEvent

  interface ScanEvent {
    scanID: ScanID
    type: ScanEventType
    payload: ScanEventPayload
  }

  interface ScanError {
    message: string
  }

  interface WebPageError {
    /** Error message */
    message: string
  }

  interface WebConsoleMessage {
    /** Console message */
    message: string
  }

  interface WebWorkerCreated {
    url: string
    page: string
  }

  interface WebCookies {
    cookies: Cookie[]
  }

  interface WebResponse {
    headers: Headers,
    status: number
    url: string
  }

  interface WebRequestEvent {
    url: string
    method: HttpMethod,
    headers: Headers,
    postData: string
    response: WebResponse
  }

  interface WebResponseError {
    message: string
  }

  interface TargetEle {
    tagName: string
    id: string
    rel: string
    name: string
  }

  interface Trace {
    script: string
    line: number
    column: number
    functionName: string
    fromEval: boolean
  }

  interface WebFunctionCallEvent {
    func: string
    args: string[]
    funcSource: string
    target: TargetEle
    trace: Trace
  }

  interface WebScriptEvent {
    url: string
    page: string
    serverLastModified: string
    sha256: string
    redirect: string[]
  }
}

export = MerryMaker
