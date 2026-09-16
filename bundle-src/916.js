__d(
  function (g, r, i, a, m, e, d) {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.isAuthCode = e.authErrorText = void 0));
    const E = {
      NO_ACCOUNT_FOR_PHONE: "noAccountForPhone",
      PHONE_NOT_DIALABLE: "errPhoneNotDialable",
      OTP_TOO_MANY_REQUESTS: "errOtpTooMany",
      OTP_EXPIRED: "errOtpExpired",
      OTP_WRONG: "errOtpWrong",
      OTP_ATTEMPTS: "errOtpAttempts",
      SMS_NOT_CONFIGURED: "errSmsUnavailable",
      SMS_SEND_FAILED: "errSmsSendFailed",
      RATE_LIMITED: "errRateLimited",
      NETWORK_TIMEOUT: "errNetworkSlow",
      SERVER_TROUBLE: "errServerTrouble",
      BIRTH_DATE_REQUIRED: "errBirthDate",
      AGE_REQUIREMENT: "errTooYoung",
      TERMS_REQUIRED: "errTermsRequired",
      SESSION_REQUIRED: "errSessionRequired",
      SESSION_INVALID: "errSessionInvalid",
      SESSION_NO_ACCOUNT: "errSessionNoAccount",
      SIGN_IN_REQUIRED: "errSignInRequired",
      UNKNOWN_SERVICE: "errUnknownService",
      NOT_FOUND: "errNotFound",
      READ_ONLY_ENDPOINT: "errReadOnlyEndpoint",
      PAYLOAD_TOO_LARGE: "errPayloadTooLarge",
      SERVICE_UNAVAILABLE: "errServiceUnavailable",
      AUTH_FAILED: "errAuthFailed",
    };
    e.isAuthCode = (_) => !!_ && _ in E;
    e.authErrorText = (_, o) => {
      if (!_) return null;
      const O = E[_];
      return O ? o(O) : _;
    };
  },
  916,
  [],
);
