export const error_msg = {
  /****************USER SECTION*****************/
  USER_NAME_REQUIRED: "Name field required",
  COUNTRY_NAME_REQUIRED: "Country field required",
  GENDER_NAME_REQUIRED: "Gender field required",
  STATE_NAME_REQUIRED: "Country field required",
  CITY_NAME_REQUIRED: "Country field required",
  DATE_OF_BIRTH_REQUIRED: "Date of birth date required",
  /****************POST SECTION ***************/
  POST_QUESTION_REQUIRED: "Qestion field required",
  POST_QUESTION_CATEGORY_REQUIRED: "Category field required",
  POSTED_BY_NAME_MAX_LENGTH: maxLength => `Posted by can't exceed ${maxLength} characters`,
  QUESTION_MAX_LENGTH: maxLength => `Question by can't exceed ${maxLength} characters`,
  /**********Category Section ***************/
  CATEGORY_TITLE_REQUIRED: "Category name required",
  CATEGORY_IMAGE_REQUIRED: "Category image required",
  CATEGORY_TITLE_MAXLENGTH: maxLength => `Category name can't exceed ${maxLength} characters`,
  CATEGORY_TITLE_PATTERN: "Category name can only have alphabets",
  /* ----- DRIVER SECTION ------ */
  // First name field
  FIRST_NAME_REQUIRED: "First name required",
  FIRST_NAME_MIN_LENGTH: minLength => `First name should have minimum ${minLength} characters`,
  FIRST_NAME_MAX_LENGTH: maxLength => `First name can't exceed ${maxLength} characters`,
  FIRST_NAME_ONLY_CHARS: "First name can only have alphabets",

  // Last name field
  LAST_NAME_REQUIRED: "Last name required",
  LAST_NAME_MIN_LENGTH: minLength => `Last name should have minimum ${minLength} characters`,
  LAST_NAME_MAX_LENGHT: maxLength => `Last name can't exceed ${maxLength} characters`,
  LAST_NAME_ONLY_CHARS: "Last name can only have alphabets",

  // cell number
  CELL_NUMBER_REQUIRED: "Mobile number required",
  CELL_NUMBER_MIN_LENGTH: minLength => `Mobile number should have minimum ${minLength} numbers`,
  CELL_NUMBER_MAX_LENGTH: maxLength => `Mobile number can't exceed ${maxLength} numbers`,
  CELL_NUMBER_PATTERN: "Mobile number can only have numbers",
  CELL_NUMBER_CODE_REQUIRED: "Country Code is required",
  

  // Email field
  EMAIL_REQUIRED: "Email-id required",
  EMAIL_INCORRECT_FORMAT: "Email is not in correct format (abc@xyz.com)",
  EMAIL_MIN_LENGTH: minLength => `Email can't exceed ${minLength} characters`,
  EMAIL_MAX_LENGTH: maxLength => `Email can't exceed ${maxLength} characters`,

  // NRIC Number
  NRIC_NUMBER_REQUIRED: "NRIC number required",
  NRIC_NUMBER_MIN_LENGTH: minLength => `NRIC number should have minimum ${minLength} numbers`,
  NRIC_NUMBER_MAX_LENGTH: maxLength => `NRIC number can't exceed ${maxLength} numbers`,
  NRIC_NUMBER_PATTERN: "NRIC number can only have numbers",

  // No. of passengers
  NO_OF_PASSENGERS_REQUIRED: "No. of passengers required",
  NO_OF_PASSENGERS_PATTERN: "No. of passengers can only have numbers",
  NO_OF_PASSENGERS_MIN_NUMBER: min => `Minimum no. of passengers cannot be less than ${min}`,
  NO_OF_PASSENGERS_MAX_NUMBER: max => `Maximum no. of passengers can't exceed ${max}`,

  // Referral code
  REFERRAL_CODE_MIN_LENGTH: minLength => `Referral code should have minimum ${minLength} numbers`,
  REFERRAL_CODE_MAX_LENGTH: maxLength => `Referral code can't exceed ${maxLength} numbers`,

  // Profile image
  PROFILE_IMAGE_REQUIRED: "Profile image required",

  // Insurance image
  INSURANCE_IMAGE_REQUIRED: "Insurance image required",

  // License front image
  LICENSE_FRONT_IMAGE_REQUIRED: "License front image required",

  // License back image
  LICENSE_BACK_IMAGE_REQUIRED: "License back image required",

  // nric front image
  NRIC_FRONT_IMAGE_REQUIRED: "NRIC front image required",

  // nric back image
  NRIC_BACK_IMAGE_REQUIRED: "NRIC back image required",

  /* ------------------------ RIDER SECTION ------------------ */

  /* ------------------------ PROMO CODE SECTION --------------- */
  PROMO_TYPE_REQUIRED: "Please select promo type",
  PROMO_TITLE_REQUIRED: "Promo title required",
  DISCOUNT_TYPE_REQUIRED: "Discount type required",
  MAXIMUM_DISCOUNT_REQUIRED: "Maximum discount required",
  MAXIMUM_DISCOUNT_PATTERN: "Maximum discount can only have numbers",
  MAXIMUM_DISCOUNT_MIN_NUMBER: min => `Maximum discount can't be less than ${min}`,
  MAXIMUM_DISCOUNT_MAX_NUMBER: max => `Maximum discount can't exceed ${max}`,
  PERCENT_DISCOUNT_REQUIRED: "Percent discount required",
  PERCENT_DISCOUNT_PATTERN: "Percent discount can only have numbers",
  PERCENT_DISCOUNT_MIN_NUMBER: min => `Percent discount can't be less than ${min}`,
  PERCENT_DISCOUNT_MAX_NUMBER: max => `Percent discount can't exceed ${max}`,
  LIMIT_PER_USER_REQUIRED: "Limit per user reuired",
  LIMIT_PER_USER_PATTERN: "Limit per user can only have numbers",
  LIMIT_PER_USER_MIN_NUMBER: min => `Limit per user can't be less than ${min}`,
  LIMIT_PER_USER_MAX_NUMBER: max => `Limit per user can't exceed ${max}`,
  USAGE_LIMIT_REQUIRED: "Usage limit required",
  START_DATE_REQUIRED: "Start date required",
  END_DATE_REQUIRED: "End date required",
  INTERVAL_REQUIRED: "Interval required",
  COUPON_CODE_REQUIRED: "Coupon code required",
  TERMS_AND_CONDITION_REQUIRED: "Terms and conditions required",

  /*------------------------------- SETTING SECTION ----------------------- */
  CATEGORY_NAME_REQUIRED: "Category name required",
  CAPACITY_REQUIRED: "Capacity required",

  MAKE_NAME_REQUIRED: "Make name required",

  MAKE_REQUIRED: "Make required",
  MODEL_REQUIRED: "Model required",
  CATEGORY_REQUIRED: "Category required",
  // ------Max Length--------------//
  MAX_LENGTH_100: "This field can't exceed 100 characters.",
  MIN_REQUIRED_2: "This field should have a minimum of 2 characters.",
  MAX_REQUIRED_255: "This field can't exceed 255 number",
  // -----commission Setting-------//

  CATEGORY_NAME_F_REQUIRED: "category name required",
  CATEGORY_NAME_F_MAX: max => `category name can't exceed ${max} number`,

  PER_KM_FARE_REQUIRED: "per km fare required",
  PER_KM_FARE_MAX: max => `per km fare can't exceed ${max} number`,

  MINIMUM_FARE_REQUIRED: "minimum fare required",
  MINIMUM_FARE_MAX: max => `minimum fare can't exceed ${max} number`,

  MINIMUM_FARE_KM_REQUIRED: "minimum fare KM required",
  MINIMUM_FARE_KM_MAX: max => `minimum fare KM can't exceed ${max} number`,

  /* ------------------------ EMAIL TEMPLATE -------------- */
  TYPE_REQUIRED: "Template type required",
  SUBJECT_REQUIRED: "Subject required",
  DESCRIPTION_REQUIRED: "Description required",

  /* ------------------------ FILTER  ------------------ */
  NAME_REQUIRED: "Name required",
  NAME: minLength => `Name should have minimum ${minLength} characters`,
  NAME_MAX_LENGTH: maxLength => `Name can't exceed ${maxLength} characters`,
  NAME_ONLY_CHARS: "Name can only have alphabets",

  DATE_COMPARER: "From date cannot be lesser than to date",

  /* -------------- Start Competition----------------- */

  /* -------------- END Competition------------------- */
  // Start Notification
  NOTIFICATION_MESSAGE_REQUIRED: "Message name required",
  // END Notification

  /*------------------- Promoted Post Start----------------------  */
  QUETION_MAX_LENGTH: maxLength => `Quetion can't exceed ${maxLength} characters.`,
  ANSWER_MAX_LENGTH: maxLength => `Answer can't exceed ${maxLength} characters.`,

  // Start Weight points

  // END: Weight points

  // Reset Password form
  CURRENT_PASSWORD_REQUIRED: "Current password required",
  NEW_PASSWORD_REQUIRED: "New password required",
  CONFIRM_PASSWORD_REQUIRED: "Confirm  password required",
  PASSWORD_MAX_LENGTH: maxLength => `Password can't exceed ${maxLength} characters`,
  PASSWORD_MIN_LENGTH: minLength => `Password should have minimum ${minLength} characters`,
  PASSWORD_INCORRECT_FORMAT: "Password must contain minimum 8 characters, at least one capital letter, one number and one special character.",
  /**common error mesage */
  ONLY_ALPHA: "This field can only contain alphabatic characters",
  ONLY_ALPHA_NUM: "Only alpha numeric characters are allowed.",
  ONLY_NUMERIC: "Only numeric numbers are allowed.",
  ONLY_ALPHA_NUMERIC: "Only alphabatic characters & numbers are allowed.",
  // MIN_LENGTH: minLength => `This field should have minimum ${minLength} number`,
  // MAX_LENGTH: maxLength => `This field can't exceed ${maxLength} number`,
  MIN_LENGTH: minLength => `This field should have minimum ${minLength} characters`,
  MAX_LENGTH: maxLength => `This field can't exceed ${maxLength} characters`,

  MIN_NUMBER: minNumber => `Minimum required number is ${minNumber}.`,
  MAX_NUMBER: minNumber => `Maximum required number is ${minNumber}.`,
  FIELD_REQUIRED: "This field is required.",
  COUNTRY_CODE: "Please select country code.",
  PHONE_NUMBER_MIN_LENGTH: minLength => `Phone number should have minimum ${minLength} numbers`,
  PHONE__NUMBER_MAX_LENGTH: maxLength => `Phone number can't exceed ${maxLength} numbers`,

  SESSION_TIMOUT_MESSAGE: "Your session has been timed out",

};

export const notification_msg = {
  // Start : driver Section//
  DRIVER_ADD_SUCCESS: "Driver details added successfully",
  DRIVER_UPDATE_SUCCESS: "Driver details updated successfully",
  // End : driver Section//

  // Start : rider section //
  RIDER_UPDATE_SUCCESS: "Rider details updated successfully",
  // End : rider Section

  // Start : promo code section
  FIRST_TIME_RIDE_ADD_SUCCESS: "First time ride promo code added successfully",
  FIRST_TIME_RIDE_UPDATE_SUCCESS: "First time ride promo code updated successfully",
  HAPPY_HOUR_DISCOUNT_ADD_SUCCESS: "Happy hour discount promo code added successfully",
  HAPPY_HOUR_DISCOUNT_UPDATE_SUCCESS: "Happy hour discount promo code updated successfully",
  HAPPY_DAY_DISCOUNT_ADD_SUCCESS: "Happy day discount promo code added successfully",
  HAPPY_DAY_DISCOUNT_UPDATE_SUCCESS: "Happy day discount promo code updated successfully",
  // End: promo code section

  // Start: setting section
  CATEGORY_ADD_SUCCESS: "Category added successfully",
  CATEGORY_UPDATE_SUCCESS: "Category updated successfully",

  MODEL_ADD_SUCCESS: "Model added successfully",
  MODEL_UPDATE_SUCCESS: "Model updated successfully",

  MAKE_ADD_SUCCESS: "Make added successfully",
  MAKE_UPDATE_SUCCESS: "Make updated successfully",

  SETTING_UPDATE_SUCCESS: "Settings updated successfully",
  SETTING_UPDATE_ALERT: "Are you sure want to update setting ?",

  FARE_SETTING_UPDATE_SUCCESS: "Fare settings updated successfully",
  FARE_SETTING_UPDATE_ALERT: "Are you sure want to update setting ?",

  // End: setting section

  // Start: change password
  PASSWORD_UPDATE_SUCCESS: "Password changed successfully",
  // EndL change password

  TEMPLATE_UPDATE_SUCCESS: "Email template updated successfully",

  SERVER_NOT_RESPONDING: "Server not responding",

  FILL_ALL_DETAILS: "Please fill all the necessary details",
  UNAUTHORIZED_ACCESS: "Unauthorized Access",
  SELECT_VALID_LOCATION: "Please select valid Location from street address field. "

};

export const element_ids = {
  NAVBAR_ID: "navbarSupportedContent"
};

export const default_const = {
  selectedLanguage: "selectedLanguage",
  Default_Language: { key: "EN", value: "en" },
  ICON_BASE_URL: "assets/images/",
  NO_USER_IMAGE: "",
  // SESSION_TIMOUT_DURATION: 600,
  currentUser: "currentUser",
  GEO_PLUGIN_DATA: "geo_plugin_data",
  SESSION_TIMOUT_DURATION: 3600,
  ARRAY_LIMIT: 5,
  ROW_LIMIT: 5,
  PHONE_NUMBER_COUNTRY: "SG",
  PHONE_NUMBER_COUNTRY_CODE: "+65",

  MONTH_LIST: () => {
    const array = [
      {
        name: "January",
        short: "Jan",
        number: 1,
        days: 31
      },
      {
        name: "February",
        short: "Feb",
        number: 2,
        days: 28
      },
      {
        name: "March",
        short: "Mar",
        number: 3,
        days: 31
      },
      {
        name: "April",
        short: "Apr",
        number: 4,
        days: 30
      },
      {
        name: "May",
        short: "May",
        number: 5,
        days: 31
      },
      {
        name: "June",
        short: "Jun",
        number: 6,
        days: 30
      },
      {
        name: "July",
        short: "Jul",
        number: 7,
        days: 31
      },
      {
        name: "August",
        short: "Aug",
        number: 8,
        days: 31
      },
      {
        name: "September",
        short: "Sep",
        number: 9,
        days: 30
      },
      {
        name: "October",
        short: "Oct",
        number: 10,
        days: 31
      },
      {
        name: "November",
        short: "Nov",
        number: 11,
        days: 30
      },
      {
        name: "December",
        short: "Dec",
        number: 12,
        days: 31
      }
    ];
    return array;
  },
  Default_Country_Code: "91",
  Default_Country_Key: "IN",
  YEAR_LIST: (START, END) => {
    const array = [];
    for (let index = START; index < END; index++) {
      array.push({ key: index, value: index });
    }
    return array;
  },
  LanguageList: [
    { key: "ar", icon: "عربي", value: "Arabic", img: "assets/images/flag/saudi-arabia-sar.png" },
    { key: "en", icon: "English", value: "English", img: "assets/images/flag/united-kinngdom-gbp.png" }
  ],

};

export const country_list = [
  { id: 1, country: "Afghanistan", short_name: "AF", calling_code: 93 },
  { id: 2, country: "Albania", short_name: "AL", calling_code: 355 },
  { id: 3, country: "Algeria", short_name: "DZ", calling_code: 213 },
  { id: 4, country: "American Samoa", short_name: "AS", calling_code: 1684 },
  { id: 5, country: "Andorra", short_name: "AD", calling_code: 376 },
  { id: 6, country: "Angola", short_name: "AO", calling_code: 244 },
  { id: 7, country: "Anguilla", short_name: "AI", calling_code: 1264 },
  { id: 8, country: "Antarctica", short_name: "AQ", calling_code: 0 },
  { id: 9, country: "Antigua And Barbuda", short_name: "AG", calling_code: 1268 },
  { id: 10, country: "Argentina", short_name: "AR", calling_code: 54 },
  { id: 11, country: "Armenia", short_name: "AM", calling_code: 374 },
  { id: 12, country: "Aruba", short_name: "AW", calling_code: 297 },
  { id: 13, country: "Australia", short_name: "AU", calling_code: 61 },
  { id: 14, country: "Austria", short_name: "AT", calling_code: 43 },
  { id: 15, country: "Azerbaijan", short_name: "AZ", calling_code: 994 },
  { id: 16, country: "Bahamas The", short_name: "BS", calling_code: 1242 },
  { id: 17, country: "Bahrain", short_name: "BH", calling_code: 973 },
  { id: 18, country: "Bangladesh", short_name: "BD", calling_code: 880 },
  { id: 19, country: "Barbados", short_name: "BB", calling_code: 1246 },
  { id: 20, country: "Belarus", short_name: "BY", calling_code: 375 },
  { id: 21, country: "Belgium", short_name: "BE", calling_code: 32 },
  { id: 22, country: "Belize", short_name: "BZ", calling_code: 501 },
  { id: 23, country: "Benin", short_name: "BJ", calling_code: 229 },
  { id: 24, country: "Bermuda", short_name: "BM", calling_code: 1441 },
  { id: 25, country: "Bhutan", short_name: "BT", calling_code: 975 },
  { id: 26, country: "Bolivia", short_name: "BO", calling_code: 591 },
  { id: 27, country: "Bosnia and Herzegovina", short_name: "BA", calling_code: 387 },
  { id: 28, country: "Botswana", short_name: "BW", calling_code: 267 },
  { id: 29, country: "Bouvet Island", short_name: "BV", calling_code: 0 },
  { id: 30, country: "Brazil", short_name: "BR", calling_code: 55 },
  { id: 31, country: "British Indian Ocean Territory", short_name: "IO", calling_code: 246 },
  { id: 32, country: "Brunei", short_name: "BN", calling_code: 673 },
  { id: 33, country: "Bulgaria", short_name: "BG", calling_code: 359 },
  { id: 34, country: "Burkina Faso", short_name: "BF", calling_code: 226 },
  { id: 35, country: "Burundi", short_name: "BI", calling_code: 257 },
  { id: 36, country: "Cambodia", short_name: "KH", calling_code: 855 },
  { id: 37, country: "Cameroon", short_name: "CM", calling_code: 237 },
  { id: 38, country: "Canada", short_name: "CA", calling_code: 1 },
  { id: 39, country: "Cape Verde", short_name: "CV", calling_code: 238 },
  { id: 40, country: "Cayman Islands", short_name: "KY", calling_code: 1345 },
  { id: 41, country: "Central African Republic", short_name: "CF", calling_code: 236 },
  { id: 42, country: "Chad", short_name: "TD", calling_code: 235 },
  { id: 43, country: "Chile", short_name: "CL", calling_code: 56 },
  { id: 44, country: "China", short_name: "CN", calling_code: 86 },
  { id: 45, country: "Christmas Island", short_name: "CX", calling_code: 61 },
  { id: 46, country: "Cocos [Keeling} Islands", short_name: "CC", calling_code: 672 },
  { id: 47, country: "Colombia", short_name: "CO", calling_code: 57 },
  { id: 48, country: "Comoros", short_name: "KM", calling_code: 269 },
  { id: 49, country: "Republic Of The Congo", short_name: "CG", calling_code: 242 },
  { id: 50, country: "Democratic Republic Of The Congo", short_name: "CD", calling_code: 242 },
  { id: 51, country: "Cook Islands", short_name: "CK", calling_code: 682 },
  { id: 52, country: "Costa Rica", short_name: "CR", calling_code: 506 },
  { id: 53, country: "Cote D'Ivoire [Ivory Coast}", short_name: "CI", calling_code: 225 },
  { id: 54, country: "Croatia [Hrvatska}", short_name: "HR", calling_code: 385 },
  { id: 55, country: "Cuba", short_name: "CU", calling_code: 53 },
  { id: 56, country: "Cyprus", short_name: "CY", calling_code: 357 },
  { id: 57, country: "Czech Republic", short_name: "CZ", calling_code: 420 },
  { id: 58, country: "Denmark", short_name: "DK", calling_code: 45 },
  { id: 59, country: "Djibouti", short_name: "DJ", calling_code: 253 },
  { id: 60, country: "Dominica", short_name: "DM", calling_code: 1767 },
  { id: 61, country: "Dominican Republic", short_name: "DO", calling_code: 1809 },
  { id: 62, country: "East Timor", short_name: "TP", calling_code: 670 },
  { id: 63, country: "Ecuador", short_name: "EC", calling_code: 593 },
  { id: 64, country: "Egypt", short_name: "EG", calling_code: 20 },
  { id: 65, country: "El Salvador", short_name: "SV", calling_code: 503 },
  { id: 66, country: "Equatorial Guinea", short_name: "GQ", calling_code: 240 },
  { id: 67, country: "Eritrea", short_name: "ER", calling_code: 291 },
  { id: 68, country: "Estonia", short_name: "EE", calling_code: 372 },
  { id: 69, country: "Ethiopia", short_name: "ET", calling_code: 251 },
  { id: 70, country: "External Territories of Australia", short_name: "XA", calling_code: 61 },
  { id: 71, country: "Falkland Islands", short_name: "FK", calling_code: 500 },
  { id: 72, country: "Faroe Islands", short_name: "FO", calling_code: 298 },
  { id: 73, country: "Fiji Islands", short_name: "FJ", calling_code: 679 },
  { id: 74, country: "Finland", short_name: "FI", calling_code: 358 },
  { id: 75, country: "France", short_name: "FR", calling_code: 33 },
  { id: 76, country: "French Guiana", short_name: "GF", calling_code: 594 },
  { id: 77, country: "French Polynesia", short_name: "PF", calling_code: 689 },
  { id: 78, country: "French Southern Territories", short_name: "TF", calling_code: 0 },
  { id: 79, country: "Gabon", short_name: "GA", calling_code: 241 },
  { id: 80, country: "Gambia The", short_name: "GM", calling_code: 220 },
  { id: 81, country: "Georgia", short_name: "GE", calling_code: 995 },
  { id: 82, country: "Germany", short_name: "DE", calling_code: 49 },
  { id: 83, country: "Ghana", short_name: "GH", calling_code: 233 },
  { id: 84, country: "Gibraltar", short_name: "GI", calling_code: 350 },
  { id: 85, country: "Greece", short_name: "GR", calling_code: 30 },
  { id: 86, country: "Greenland", short_name: "GL", calling_code: 299 },
  { id: 87, country: "Grenada", short_name: "GD", calling_code: 1473 },
  { id: 88, country: "Guadeloupe", short_name: "GP", calling_code: 590 },
  { id: 89, country: "Guam", short_name: "GU", calling_code: 1671 },
  { id: 90, country: "Guatemala", short_name: "GT", calling_code: 502 },
  { id: 91, country: "Guernsey and Alderney", short_name: "XU", calling_code: 44 },
  { id: 92, country: "Guinea", short_name: "GN", calling_code: 224 },
  { id: 93, country: "Guinea-Bissau", short_name: "GW", calling_code: 245 },
  { id: 94, country: "Guyana", short_name: "GY", calling_code: 592 },
  { id: 95, country: "Haiti", short_name: "HT", calling_code: 509 },
  { id: 96, country: "Heard and McDonald Islands", short_name: "HM", calling_code: 0 },
  { id: 97, country: "Honduras", short_name: "HN", calling_code: 504 },
  { id: 98, country: "Hong Kong S.A.R.", short_name: "HK", calling_code: 852 },
  { id: 99, country: "Hungary", short_name: "HU", calling_code: 36 },
  { id: 100, country: "Iceland", short_name: "IS", calling_code: 354 },
  { id: 101, country: "India", short_name: "IN", calling_code: 91 },
  { id: 102, country: "Indonesia", short_name: "ID", calling_code: 62 },
  { id: 103, country: "Iran", short_name: "IR", calling_code: 98 },
  { id: 104, country: "Iraq", short_name: "IQ", calling_code: 964 },
  { id: 105, country: "Ireland", short_name: "IE", calling_code: 353 },
  { id: 106, country: "Israel", short_name: "IL", calling_code: 972 },
  { id: 107, country: "Italy", short_name: "IT", calling_code: 39 },
  { id: 108, country: "Jamaica", short_name: "JM", calling_code: 1876 },
  { id: 109, country: "Japan", short_name: "JP", calling_code: 81 },
  { id: 110, country: "Jersey", short_name: "XJ", calling_code: 44 },
  { id: 111, country: "Jordan", short_name: "JO", calling_code: 962 },
  { id: 112, country: "Kazakhstan", short_name: "KZ", calling_code: 7 },
  { id: 113, country: "Kenya", short_name: "KE", calling_code: 254 },
  { id: 114, country: "Kiribati", short_name: "KI", calling_code: 686 },
  { id: 115, country: "Korea North", short_name: "KP", calling_code: 850 },
  { id: 116, country: "Korea South", short_name: "KR", calling_code: 82 },
  { id: 117, country: "Kuwait", short_name: "KW", calling_code: 965 },
  { id: 118, country: "Kyrgyzstan", short_name: "KG", calling_code: 996 },
  { id: 119, country: "Laos", short_name: "LA", calling_code: 856 },
  { id: 120, country: "Latvia", short_name: "LV", calling_code: 371 },
  { id: 121, country: "Lebanon", short_name: "LB", calling_code: 961 },
  { id: 122, country: "Lesotho", short_name: "LS", calling_code: 266 },
  { id: 123, country: "Liberia", short_name: "LR", calling_code: 231 },
  { id: 124, country: "Libya", short_name: "LY", calling_code: 218 },
  { id: 125, country: "Liechtenstein", short_name: "LI", calling_code: 423 },
  { id: 126, country: "Lithuania", short_name: "LT", calling_code: 370 },
  { id: 127, country: "Luxembourg", short_name: "LU", calling_code: 352 },
  { id: 128, country: "Macau S.A.R.", short_name: "MO", calling_code: 853 },
  { id: 129, country: "Macedonia", short_name: "MK", calling_code: 389 },
  { id: 130, country: "Madagascar", short_name: "MG", calling_code: 261 },
  { id: 131, country: "Malawi", short_name: "MW", calling_code: 265 },
  { id: 132, country: "Malaysia", short_name: "MY", calling_code: 60 },
  { id: 133, country: "Maldives", short_name: "MV", calling_code: 960 },
  { id: 134, country: "Mali", short_name: "ML", calling_code: 223 },
  { id: 135, country: "Malta", short_name: "MT", calling_code: 356 },
  { id: 136, country: "Man [Isle of}", short_name: "XM", calling_code: 44 },
  { id: 137, country: "Marshall Islands", short_name: "MH", calling_code: 692 },
  { id: 138, country: "Martinique", short_name: "MQ", calling_code: 596 },
  { id: 139, country: "Mauritania", short_name: "MR", calling_code: 222 },
  { id: 140, country: "Mauritius", short_name: "MU", calling_code: 230 },
  { id: 141, country: "Mayotte", short_name: "YT", calling_code: 269 },
  { id: 142, country: "Mexico", short_name: "MX", calling_code: 52 },
  { id: 143, country: "Micronesia", short_name: "FM", calling_code: 691 },
  { id: 144, country: "Moldova", short_name: "MD", calling_code: 373 },
  { id: 145, country: "Monaco", short_name: "MC", calling_code: 377 },
  { id: 146, country: "Mongolia", short_name: "MN", calling_code: 976 },
  { id: 147, country: "Montserrat", short_name: "MS", calling_code: 1664 },
  { id: 148, country: "Morocco", short_name: "MA", calling_code: 212 },
  { id: 149, country: "Mozambique", short_name: "MZ", calling_code: 258 },
  { id: 150, country: "Myanmar", short_name: "MM", calling_code: 95 },
  { id: 151, country: "Namibia", short_name: "NA", calling_code: 264 },
  { id: 152, country: "Nauru", short_name: "NR", calling_code: 674 },
  { id: 153, country: "Nepal", short_name: "NP", calling_code: 977 },
  { id: 154, country: "Netherlands Antilles", short_name: "AN", calling_code: 599 },
  { id: 155, country: "Netherlands The", short_name: "NL", calling_code: 31 },
  { id: 156, country: "New Caledonia", short_name: "NC", calling_code: 687 },
  { id: 157, country: "New Zealand", short_name: "NZ", calling_code: 64 },
  { id: 158, country: "Nicaragua", short_name: "NI", calling_code: 505 },
  { id: 159, country: "Niger", short_name: "NE", calling_code: 227 },
  { id: 160, country: "Nigeria", short_name: "NG", calling_code: 234 },
  { id: 161, country: "Niue", short_name: "NU", calling_code: 683 },
  { id: 162, country: "Norfolk Island", short_name: "NF", calling_code: 672 },
  { id: 163, country: "Northern Mariana Islands", short_name: "MP", calling_code: 1670 },
  { id: 164, country: "Norway", short_name: "NO", calling_code: 47 },
  { id: 165, country: "Oman", short_name: "OM", calling_code: 968 },
  { id: 166, country: "Pakistan", short_name: "PK", calling_code: 92 },
  { id: 167, country: "Palau", short_name: "PW", calling_code: 680 },
  { id: 168, country: "Palestinian Territory Occupied", short_name: "PS", calling_code: 970 },
  { id: 169, country: "Panama", short_name: "PA", calling_code: 507 },
  { id: 170, country: "Papua new Guinea", short_name: "PG", calling_code: 675 },
  { id: 171, country: "Paraguay", short_name: "PY", calling_code: 595 },
  { id: 172, country: "Peru", short_name: "PE", calling_code: 51 },
  { id: 173, country: "Philippines", short_name: "PH", calling_code: 63 },
  { id: 174, country: "Pitcairn Island", short_name: "PN", calling_code: 0 },
  { id: 175, country: "Poland", short_name: "PL", calling_code: 48 },
  { id: 176, country: "Portugal", short_name: "PT", calling_code: 351 },
  { id: 177, country: "Puerto Rico", short_name: "PR", calling_code: 1787 },
  { id: 178, country: "Qatar", short_name: "QA", calling_code: 974 },
  { id: 179, country: "Reunion", short_name: "RE", calling_code: 262 },
  { id: 180, country: "Romania", short_name: "RO", calling_code: 40 },
  { id: 181, country: "Russia", short_name: "RU", calling_code: 70 },
  { id: 182, country: "Rwanda", short_name: "RW", calling_code: 250 },
  { id: 183, country: "Saint Helena", short_name: "SH", calling_code: 290 },
  { id: 184, country: "Saint Kitts And Nevis", short_name: "KN", calling_code: 1869 },
  { id: 185, country: "Saint Lucia", short_name: "LC", calling_code: 1758 },
  { id: 186, country: "Saint Pierre and Miquelon", short_name: "PM", calling_code: 508 },
  { id: 187, country: "Saint Vincent And The Grenadines", short_name: "VC", calling_code: 1784 },
  { id: 188, country: "Samoa", short_name: "WS", calling_code: 684 },
  { id: 189, country: "San Marino", short_name: "SM", calling_code: 378 },
  { id: 190, country: "Sao Tome and Principe", short_name: "ST", calling_code: 239 },
  { id: 191, country: "Saudi Arabia", short_name: "SA", calling_code: 966 },
  { id: 192, country: "Senegal", short_name: "SN", calling_code: 221 },
  { id: 193, country: "Serbia", short_name: "RS", calling_code: 381 },
  { id: 194, country: "Seychelles", short_name: "SC", calling_code: 248 },
  { id: 195, country: "Sierra Leone", short_name: "SL", calling_code: 232 },
  { id: 196, country: "Singapore", short_name: "SG", calling_code: 65 },
  { id: 197, country: "Slovakia", short_name: "SK", calling_code: 421 },
  { id: 198, country: "Slovenia", short_name: "SI", calling_code: 386 },
  { id: 199, country: "Smaller Territories of the UK", short_name: "XG", calling_code: 44 },
  { id: 200, country: "Solomon Islands", short_name: "SB", calling_code: 677 },
  { id: 201, country: "Somalia", short_name: "SO", calling_code: 252 },
  { id: 202, country: "South Africa", short_name: "ZA", calling_code: 27 },
  { id: 203, country: "South Georgia", short_name: "GS", calling_code: 0 },
  { id: 204, country: "South Sudan", short_name: "SS", calling_code: 211 },
  { id: 205, country: "Spain", short_name: "ES", calling_code: 34 },
  { id: 206, country: "Sri Lanka", short_name: "LK", calling_code: 94 },
  { id: 207, country: "Sudan", short_name: "SD", calling_code: 249 },
  { id: 208, country: "Suriname", short_name: "SR", calling_code: 597 },
  { id: 209, country: "Svalbard And Jan Mayen Islands", short_name: "SJ", calling_code: 47 },
  { id: 210, country: "Swaziland", short_name: "SZ", calling_code: 268 },
  { id: 211, country: "Sweden", short_name: "SE", calling_code: 46 },
  { id: 212, country: "Switzerland", short_name: "CH", calling_code: 41 },
  { id: 213, country: "Syria", short_name: "SY", calling_code: 963 },
  { id: 214, country: "Taiwan", short_name: "TW", calling_code: 886 },
  { id: 215, country: "Tajikistan", short_name: "TJ", calling_code: 992 },
  { id: 216, country: "Tanzania", short_name: "TZ", calling_code: 255 },
  { id: 217, country: "Thailand", short_name: "TH", calling_code: 66 },
  { id: 218, country: "Togo", short_name: "TG", calling_code: 228 },
  { id: 219, country: "Tokelau", short_name: "TK", calling_code: 690 },
  { id: 220, country: "Tonga", short_name: "TO", calling_code: 676 },
  { id: 221, country: "Trinidad And Tobago", short_name: "TT", calling_code: 1868 },
  { id: 222, country: "Tunisia", short_name: "TN", calling_code: 216 },
  { id: 223, country: "Turkey", short_name: "TR", calling_code: 90 },
  { id: 224, country: "Turkmenistan", short_name: "TM", calling_code: 7370 },
  { id: 225, country: "Turks And Caicos Islands", short_name: "TC", calling_code: 1649 },
  { id: 226, country: "Tuvalu", short_name: "TV", calling_code: 688 },
  { id: 227, country: "Uganda", short_name: "UG", calling_code: 256 },
  { id: 228, country: "Ukraine", short_name: "UA", calling_code: 380 },
  { id: 229, country: "United Arab Emirates", short_name: "AE", calling_code: 971 },
  { id: 230, country: "United Kingdom", short_name: "GB", calling_code: 44 },
  { id: 231, country: "United States", short_name: "US", calling_code: 1 },
  { id: 232, country: "United States Minor Outlying Islands", short_name: "UM", calling_code: 1 },
  { id: 233, country: "Uruguay", short_name: "UY", calling_code: 598 },
  { id: 234, country: "Uzbekistan", short_name: "UZ", calling_code: 998 },
  { id: 235, country: "Vanuatu", short_name: "VU", calling_code: 678 },
  { id: 236, country: "Vatican City State [Holy See}", short_name: "VA", calling_code: 39 },
  { id: 237, country: "Venezuela", short_name: "VE", calling_code: 58 },
  { id: 238, country: "Vietnam", short_name: "VN", calling_code: 84 },
  { id: 239, country: "Virgin Islands [British}", short_name: "VG", calling_code: 1284 },
  { id: 240, country: "Virgin Islands [US}", short_name: "VI", calling_code: 1340 },
  { id: 241, country: "Wallis And Futuna Islands", short_name: "WF", calling_code: 681 },
  { id: 242, country: "Western Sahara", short_name: "EH", calling_code: 212 },
  { id: 243, country: "Yemen", short_name: "YE", calling_code: 967 },
  { id: 244, country: "Yugoslavia", short_name: "YU", calling_code: 38 },
  { id: 245, country: "Zambia", short_name: "ZM", calling_code: 260 },
  { id: 246, country: "Zimbabwe", short_name: "ZW", calling_code: 263 }
];
