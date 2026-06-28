export const companyContact = {
  legalName: "365INO, CO.",
  email: "info@365ino.com",
  phone: "727-819-4456",
  fax: "813-475-6665",
  linkedIn: "https://www.linkedin.com/company/77123276",
  address: {
    street: "7901 4th St. N.",
    suite: "Suite 4540",
    city: "St. Petersburg",
    state: "FL",
    postalCode: "33702",
    country: "US"
  }
};

export const companyAddressLines = [
  companyContact.legalName,
  companyContact.address.street,
  companyContact.address.suite,
  `${companyContact.address.city}, ${companyContact.address.state} ${companyContact.address.postalCode}`
];
