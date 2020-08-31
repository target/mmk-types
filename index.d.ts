import { Cookie, Headers, HttpMethod } from 'puppeteer'

declare namespace MerryMaker {
  /** Scan ID associated with event (UUIDv4) */
  type ScanID = string

  interface WebPageError {
    /** Error message */
    message: string
    scanID: ScanID
  }

  interface WebConsoleMessage {
    /** Console message */
    message: string
    scanID: ScanID
  }

  interface WebWorkerCreated {
    url: string
    page: string
    scanID: ScanID
  }

  interface WebCookies {
    scanID: ScanID
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
    scanID: ScanID
    response: WebResponse[]
  }

  interface WebResponseError {
    message: string
    scanID: ScanID
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
    scanID: ScanID
    target: TargetEle
    trace: Trace
  }

  interface WebScriptEvent {
    url: string
    page: string
    serverLastModified: string
    sha256: string
    redirect: string[]
    scanID: ScanID
  }
}

export = MerryMaker
