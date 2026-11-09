import type { CatalogEntry } from "../types";

/** Authentication, Identity and Payment Technologies */
const entries: CatalogEntry[] = [
  {
    id: "auth0",
    name: "Auth0",
    abbr: "A0",
    category: "Identity Platform",
    color: "#eb5424",
    description:
      "A hosted service for adding login, sign-up and user management to your apps. It handles passwords, social logins and multi-factor authentication so you don't have to build it yourself.",
    highlights: [
      "Social and passwordless login",
      "Single sign-on for apps",
      "Multi-factor authentication",
    ],
    funFact:
      "Auth0 was acquired by Okta in 2021 in a deal worth about $6.5 billion.",
    url: "https://auth0.com/",
  },
  {
    id: "keycloak",
    name: "Keycloak",
    abbr: "KC",
    category: "Identity Server",
    color: "#4d4d9f",
    description:
      "An open-source identity and access management server you can host yourself. It provides login pages, single sign-on and user management using standards like OpenID Connect and SAML.",
    highlights: [
      "Self-hosted single sign-on",
      "OpenID Connect and SAML login",
      "Enterprise user federation via LDAP",
    ],
    funFact:
      "Keycloak was started at Red Hat and is now a Cloud Native Computing Foundation (CNCF) project.",
    url: "https://www.keycloak.org/",
  },
  {
    id: "clerk",
    name: "Clerk",
    abbr: "Cl",
    category: "Auth Service",
    color: "#6c47ff",
    description:
      "A developer-focused authentication service with ready-made sign-in components. You drop prebuilt UI into React or Next.js apps and get user accounts, sessions and profiles working fast.",
    highlights: [
      "Drop-in sign-in UI for React",
      "User management for Next.js apps",
      "Organizations and multi-tenant auth",
    ],
    funFact:
      "Clerk's pitch is that you can add a full sign-in flow by dropping in a single prebuilt component like <SignIn />.",
    url: "https://clerk.com/",
    spawnWeight: 0.5,
  },
  {
    id: "firebase-authentication",
    name: "Firebase Authentication",
    abbr: "FA",
    category: "Auth Service",
    color: "#ffa000",
    description:
      "Google's backend service for signing users into your app. It supports email/password, phone numbers and providers like Google, Apple and GitHub with ready-made SDKs.",
    highlights: [
      "Login for mobile and web apps",
      "Google, Apple and GitHub sign-in",
      "Phone number verification via SMS",
    ],
    funFact:
      "Firebase began as a startup offering a realtime database and was acquired by Google in 2014.",
    url: "https://firebase.google.com/docs/auth",
  },
  {
    id: "supabase-auth",
    name: "Supabase Auth",
    abbr: "SA",
    category: "Auth Service",
    color: "#3ecf8e",
    description:
      "The authentication part of Supabase, an open-source backend built on Postgres. It manages users and logins and works with Postgres Row Level Security to control who can see which data.",
    highlights: [
      "Email, magic link and OAuth login",
      "Row Level Security with Postgres",
      "Auth for Supabase-backed apps",
    ],
    funFact:
      "Because users live in Postgres, Supabase lets you write database security rules that check the logged-in user's ID directly in SQL.",
    url: "https://supabase.com/docs/guides/auth",
  },
  {
    id: "amazon-cognito",
    name: "Amazon Cognito",
    abbr: "AC",
    category: "Identity Service",
    color: "#dd344c",
    description:
      "AWS's service for adding sign-up and sign-in to web and mobile apps. It stores user accounts in user pools and can hand out temporary AWS credentials to access other services.",
    highlights: [
      "User sign-up and sign-in on AWS",
      "Social and enterprise identity login",
      "Temporary AWS credentials for apps",
    ],
    funFact:
      "Cognito's name comes from the Latin \"cognito,\" related to knowing or recognizing — fitting for a service that figures out who you are.",
    url: "https://aws.amazon.com/cognito/",
  },
  {
    id: "okta",
    name: "Okta",
    abbr: "Ok",
    category: "Identity Platform",
    color: "#007dc1",
    description:
      "A cloud identity platform companies use so employees can log in once and reach all their work apps. It also handles multi-factor authentication and user provisioning.",
    highlights: [
      "Workplace single sign-on",
      "Multi-factor authentication",
      "Managing employee app access",
    ],
    funFact:
      "Okta's name comes from \"okta,\" a unit meteorologists use to measure how much of the sky is covered by clouds — a nod to cloud computing.",
    url: "https://www.okta.com/",
  },
  {
    id: "microsoft-entra-id",
    name: "Microsoft Entra ID",
    abbr: "ME",
    category: "Identity Service",
    color: "#0078d4",
    description:
      "Microsoft's cloud identity service that controls sign-in to Microsoft 365, Azure and thousands of other apps. Organizations use it to manage users, groups and access rules.",
    highlights: [
      "Signing in to Microsoft 365 and Azure",
      "Enterprise single sign-on",
      "Conditional access and MFA policies",
    ],
    funFact:
      "Until 2023, Microsoft Entra ID was called Azure Active Directory (Azure AD) — many developers still call it by the old name.",
    url: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id",
  },
  {
    id: "stripe",
    name: "Stripe",
    abbr: "S",
    category: "Payments Platform",
    color: "#635bff",
    description:
      "An online payments platform with developer-friendly APIs for accepting cards, wallets and subscriptions. You can start taking payments in a website or app with just a few lines of code.",
    highlights: [
      "Online checkout and card payments",
      "Subscriptions and recurring billing",
      "Marketplace payouts with Connect",
    ],
    funFact:
      "Stripe was founded by Irish brothers Patrick and John Collison, and it became famous for how easy its API made accepting payments online.",
    url: "https://stripe.com/",
  },
  {
    id: "paypal",
    name: "PayPal",
    abbr: "PP",
    category: "Payments Platform",
    color: "#003087",
    description:
      "One of the oldest online payment services, letting people pay and get paid with an account instead of sharing card details. Developers add PayPal buttons and checkout to their stores.",
    highlights: [
      "PayPal checkout buttons in stores",
      "Sending money between people",
      "Marketplace and freelancer payments",
    ],
    funFact:
      "PayPal grew out of a merger between Confinity and Elon Musk's X.com, and eBay bought it in 2002. Its early team became known as the \"PayPal Mafia.\"",
    url: "https://developer.paypal.com/",
  },
  {
    id: "adyen",
    name: "Adyen",
    abbr: "Ad",
    category: "Payments Platform",
    color: "#0abf53",
    description:
      "A Dutch payments company that lets large businesses accept payments online, in apps and in stores through one platform. It supports many local payment methods across the world.",
    highlights: [
      "Global payments for big brands",
      "Online and in-store payments",
      "Local payment methods worldwide",
    ],
    funFact:
      "Adyen means \"start over again\" in Surinamese, since the founders were starting a new company after an earlier one.",
    url: "https://www.adyen.com/",
    spawnWeight: 0.5,
  },
  {
    id: "braintree",
    name: "Braintree",
    abbr: "BT",
    category: "Payments Gateway",
    color: "#2d2e83",
    description:
      "A payment gateway owned by PayPal that lets apps accept cards, PayPal, Venmo and digital wallets. It's popular with mobile apps and marketplaces.",
    highlights: [
      "Card and PayPal payments in apps",
      "Venmo and digital wallet checkout",
      "Secure vaulting of payment details",
    ],
    funFact:
      "Braintree powered payments for early Uber and Airbnb, and it brought the Venmo app along when PayPal acquired it in 2013.",
    url: "https://www.braintreepayments.com/",
    spawnWeight: 0.5,
  },
  {
    id: "paddle",
    name: "Paddle",
    abbr: "Pa",
    category: "Merchant of Record",
    color: "#3f5ffb",
    description:
      "A payments platform for software companies that acts as the merchant of record. Paddle sells your product on your behalf and handles global sales taxes, invoices and compliance.",
    highlights: [
      "Selling SaaS subscriptions",
      "Handling global sales tax and VAT",
      "Checkout for desktop and web software",
    ],
    funFact:
      "As a \"merchant of record,\" Paddle is legally the seller of your software, so it's Paddle — not you — that deals with sales tax in each country.",
    url: "https://www.paddle.com/",
    spawnWeight: 0.5,
  },
  {
    id: "revenuecat",
    name: "RevenueCat",
    abbr: "RC",
    category: "In-App Purchases SDK",
    color: "#f25a5a",
    description:
      "A service that wraps Apple's and Google's in-app purchase systems behind one simple SDK. It tracks subscriptions, validates receipts and shows revenue charts for mobile apps.",
    highlights: [
      "In-app subscriptions on iOS and Android",
      "Receipt validation and entitlements",
      "Subscription analytics",
    ],
    funFact:
      "RevenueCat exists because handling App Store and Google Play subscriptions separately is famously painful — it gives you one API for both.",
    url: "https://www.revenuecat.com/",
    spawnWeight: 0.5,
  },
  {
    id: "google-play-billing",
    name: "Google Play Billing",
    abbr: "GP",
    category: "In-App Billing API",
    color: "#01875f",
    description:
      "Google's system for selling digital goods and subscriptions inside Android apps on the Play Store. Apps use the Play Billing Library to start purchases and confirm them.",
    highlights: [
      "In-app purchases on Android",
      "App subscriptions",
      "Selling digital items in games",
    ],
    funFact:
      "Purchases must be \"acknowledged\" by the app within three days, or Google Play automatically refunds them.",
    url: "https://developer.android.com/google/play/billing",
    spawnWeight: 0.5,
  },
  {
    id: "apple-storekit",
    name: "Apple StoreKit",
    abbr: "SK",
    category: "In-App Purchase API",
    color: "#0d96f6",
    description:
      "Apple's framework for in-app purchases and subscriptions on iPhone, iPad and Mac. It lets apps show products, process payments through the App Store and check what a user owns.",
    highlights: [
      "In-app purchases on iOS",
      "Auto-renewable subscriptions",
      "Checking a user's purchased content",
    ],
    funFact:
      "StoreKit 2 introduced a modern Swift API using async/await, making purchase code much shorter than the original delegate-based version.",
    url: "https://developer.apple.com/storekit/",
    spawnWeight: 0.5,
  },
  {
    id: "razorpay",
    name: "Razorpay",
    abbr: "Ra",
    category: "Payments Gateway",
    color: "#3395ff",
    description:
      "An Indian payments company that lets businesses accept cards, UPI, net banking and wallets. Developers integrate its checkout into websites and apps serving customers in India.",
    highlights: [
      "UPI and card payments in India",
      "Online checkout for Indian stores",
      "Payment links and subscriptions",
    ],
    funFact:
      "Razorpay was part of the Y Combinator startup accelerator, and supports UPI — India's hugely popular instant bank payment system.",
    url: "https://razorpay.com/",
    spawnWeight: 0.5,
  },
  {
    id: "sslcommerz",
    name: "SSLCommerz",
    abbr: "Ss",
    category: "Payments Gateway",
    color: "#1f6fb2",
    description:
      "A payment gateway from Bangladesh that lets online shops accept cards, mobile banking like bKash and Nagad, and internet banking through one integration.",
    highlights: [
      "Online payments in Bangladesh",
      "bKash and mobile banking checkout",
      "E-commerce card payments",
    ],
    funFact:
      "In Bangladesh, mobile financial services like bKash are hugely popular, so SSLCommerz bundles them alongside traditional cards in one checkout.",
    url: "https://www.sslcommerz.com/",
    spawnWeight: 0.5,
  },
  {
    id: "pci-dss",
    name: "PCI DSS",
    abbr: "PD",
    category: "Security Standard",
    color: "#c62828",
    description:
      "The Payment Card Industry Data Security Standard, a set of security rules for any business that stores, processes or sends credit card data. It covers things like encryption, access control and logging.",
    highlights: [
      "Securing credit card data",
      "Compliance audits for merchants",
      "Why apps use tokenized payments",
    ],
    funFact:
      "PCI DSS was created by the major card brands — Visa, Mastercard, American Express, Discover and JCB — who formed the PCI Security Standards Council in 2006.",
    url: "https://www.pcisecuritystandards.org/",
  },
  {
    id: "3d-secure",
    name: "3D Secure",
    abbr: "3D",
    category: "Payment Security Protocol",
    color: "#1565c0",
    description:
      "An extra security step for online card payments where the bank confirms it's really you, often via an app prompt or one-time code. It reduces fraud for online shopping.",
    highlights: [
      "Verifying online card payments",
      "Strong customer authentication in Europe",
      "Reducing card-not-present fraud",
    ],
    funFact:
      "The \"3D\" stands for three domains: the merchant's bank, the card issuer, and the interoperability domain (the card network) that connects them.",
    url: "https://en.wikipedia.org/wiki/3-D_Secure",
  },
  {
    id: "emv",
    name: "EMV",
    abbr: "EM",
    category: "Payment Card Standard",
    color: "#d4a017",
    description:
      "The global standard for chip-based payment cards and terminals. The chip creates a unique code for each transaction, making cards much harder to clone than old magnetic stripes.",
    highlights: [
      "Chip and contactless card payments",
      "Payment terminals in stores",
      "Reducing card cloning fraud",
    ],
    funFact:
      "EMV is named after the three companies that created it: Europay, Mastercard and Visa.",
    url: "https://www.emvco.com/",
  },
];

export default entries;
