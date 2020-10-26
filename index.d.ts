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
  | 'file-download'
  | 'log-message'
  | 'screenshot'
  | 'error'
  | 'complete'
  | 'rule-alert'

  type ScanEventPayload = WebPageError
  | WebConsoleMessage
  | LogMessage
  | Screenshot
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

  interface FileDownload {
    url: string
    filename: string
    sha256: string
    headers: unknown
  }

  interface WebPageError {
    /** Error message */
    message: string
  }

  interface WebConsoleMessage {
    /** Console message */
    message: string
  }

  interface LogMessage {
    /** Log Message */
    message: string
  }

  interface Screenshot {
    payload: string
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
    method: HttpMethod
    headers: Headers
    resourceType: string
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
    headers: Headers,
    redirect: string[]
  }

  interface FileAttributes {
    id?: string
    scan_id: string
    created_at?: Date
    url: string
    filename: string
    headers: unknown
    sha256: string
  }

  interface EventResult {
    entry: ScanEventType
    scan_id: string
    level: string
    created_at?: Date
  }

  type EventMessage = {
    message: string
  }

  interface LogMessageEvent extends EventResult {
    entry: 'log-message'
    event: EventMessage
  }

  interface ResponseErrorEvent extends EventResult {
    entry: 'response-error'
    event: EventMessage
  }

  interface ConsoleMessageEvent extends EventResult {
    entry: 'console-message'
    event: EventMessage
  }

  interface GeneralErrorEvent extends EventResult {
    entry: 'error'
    event: EventMessage
  }

  interface PageErrorEvent extends EventResult {
    entry: 'page-error'
    event: EventMessage
  }

  interface ScriptResponseEvent extends EventResult {
    entry: 'script-response'
    event: WebScriptEvent
  }

  interface RequestEvent extends EventResult {
    entry: 'request'
    event: WebRequestEvent
  }

  interface FunctionCallEvent extends EventResult {
    entry: 'function-call'
    event: WebFunctionCallEvent
  }

  interface RuleAlertEvent extends EventResult {
    entry: 'rule-alert'
    rule: 'string'
    event: {
      alert: boolean
      name: string
      error?: boolean
      message?: string
      level: 'prod' | 'test'
      context: unknown
    }
  }

}

export = MerryMaker
