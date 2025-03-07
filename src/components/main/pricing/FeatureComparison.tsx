import AnimatedTabs from "@/components/common/AnimatedTabs";
import React from "react";
import PlanTable from "./PlanTable";
import SectionIntro from "@/components/common/SectionIntro";

const FeatureComparison = () => {
  const tabs = [
    {
      id: "monthly",
      label: "Monthly",
      content: <PlanTable planData={planDataMonthly} />,
    },
    {
      id: "yearly",
      label: "Yearly",
      content: <PlanTable planData={planDataYearly} />,
    },
  ];
  return (
    <div>
      <SectionIntro
        title={{
          highLiteWords: "Feature Comparison",
          highlightColor: "text-[var(--secondary-color)]",
        }}
        sectionGap="pb-3 md:pb-4"
      />
      <AnimatedTabs tabs={tabs} />
    </div>
  );
};

export default FeatureComparison;

const planDataMonthly = [
  {
    name: "Basic",
    price: "$0/Mo",
    billed: "Monthly",
    admin: 1,
    users: 2,
    unlimitedWorkspace: false,
    unlimitedMessage: true,
    unlimitedContact: false,
    unlimitedBroadcasts: false,
    channels: {
      whatsappWeb: true,
      whatsappAPI: false,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: false,
      crmManagement: false,
      quickReplies: false,
      workflowChatbotAutomation: false,
      sharedStorageSpace: false,
    },
  },
  {
    name: "Standard",
    price: "$10/Mo",
    billed: "Monthly",
    admin: 1,
    users: 5,
    unlimitedWorkspace: true,
    unlimitedMessage: true,
    unlimitedContact: true,
    unlimitedBroadcasts: true,
    channels: {
      whatsappWeb: true,
      whatsappAPI: true,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: true,
      crmManagement: true,
      quickReplies: true,
      workflowChatbotAutomation: false,
      sharedStorageSpace: false,
    },
  },
  {
    name: "Pro",
    price: "$200/Mo",
    billed: "Monthly",
    admin: 1,
    users: 10,
    unlimitedWorkspace: true,
    unlimitedMessage: true,
    unlimitedContact: true,
    unlimitedBroadcasts: true,
    channels: {
      whatsappWeb: true,
      whatsappAPI: true,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: true,
      crmManagement: true,
      quickReplies: true,
      workflowChatbotAutomation: true,
      sharedStorageSpace: true,
    },
  },
  {
    name: "Premium",
    price: "$500/Mo",
    billed: "Monthly",
    admin: 1,
    users: 20,
    unlimitedWorkspace: true,
    unlimitedMessage: true,
    unlimitedContact: true,
    unlimitedBroadcasts: true,
    channels: {
      whatsappWeb: true,
      whatsappAPI: true,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: true,
      crmManagement: true,
      quickReplies: true,
      workflowChatbotAutomation: true,
      sharedStorageSpace: true,
    },
  },
];
const planDataYearly = [
  {
    name: "Basic",
    price: "$0/ye",
    billed: "Monthly",
    admin: 1,
    users: 2,
    unlimitedWorkspace: false,
    unlimitedMessage: true,
    unlimitedContact: false,
    unlimitedBroadcasts: false,
    channels: {
      whatsappWeb: true,
      whatsappAPI: false,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: false,
      crmManagement: false,
      quickReplies: false,
      workflowChatbotAutomation: false,
      sharedStorageSpace: false,
    },
  },
  {
    name: "Standard",
    price: "$10/ye",
    billed: "Monthly",
    admin: 1,
    users: 5,
    unlimitedWorkspace: true,
    unlimitedMessage: true,
    unlimitedContact: true,
    unlimitedBroadcasts: true,
    channels: {
      whatsappWeb: true,
      whatsappAPI: true,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: true,
      crmManagement: true,
      quickReplies: true,
      workflowChatbotAutomation: false,
      sharedStorageSpace: false,
    },
  },
  {
    name: "Pro",
    price: "$200/ye",
    billed: "Monthly",
    admin: 1,
    users: 10,
    unlimitedWorkspace: true,
    unlimitedMessage: true,
    unlimitedContact: true,
    unlimitedBroadcasts: true,
    channels: {
      whatsappWeb: true,
      whatsappAPI: true,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: true,
      crmManagement: true,
      quickReplies: true,
      workflowChatbotAutomation: true,
      sharedStorageSpace: true,
    },
  },
  {
    name: "Premium",
    price: "$500/ye",
    billed: "Monthly",
    admin: 1,
    users: 20,
    unlimitedWorkspace: true,
    unlimitedMessage: true,
    unlimitedContact: true,
    unlimitedBroadcasts: true,
    channels: {
      whatsappWeb: true,
      whatsappAPI: true,
      telegram: true,
      facebookMessenger: true,
      instagram: true,
      email: true,
    },
    features: {
      dashboard: true,
      teamInbox: true,
      crmManagement: true,
      quickReplies: true,
      workflowChatbotAutomation: true,
      sharedStorageSpace: true,
    },
  },
];
