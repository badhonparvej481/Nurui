import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import { FC } from "react";

interface IProps {
  planData: {
    name: string;
    price: string;
    billed: string;
    admin: number;
    users: number;
    unlimitedWorkspace: boolean;
    unlimitedMessage: boolean;
    unlimitedContact: boolean;
    unlimitedBroadcasts: boolean;
    channels: {
      whatsappWeb: boolean;
      whatsappAPI: boolean;
      telegram: boolean;
      facebookMessenger: boolean;
      instagram: boolean;
      email: boolean;
    };
    features: {
      dashboard: boolean;
      teamInbox: boolean;
      crmManagement: boolean;
      quickReplies: boolean;
      workflowChatbotAutomation: boolean;
      sharedStorageSpace: boolean;
    };
  }[];
}

const PlanTable: FC<IProps> = ({ planData }) => {
  return (
    <div className="container relative overflow-x-auto">
      <table className="w-full rtl:text-right">
        <thead className="bg-[var(--secondary-color-4)] text-[var(--secondary-color)] md:rounded-xl overflow-hidden text-lg">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  hidden md:table-cell first:md:rounded-l-xl "
            >
              Plan
            </th>
            {planData?.map((data, idx) => (
              <th
                key={idx}
                scope="col"
                className="md:px-6 py-3 text-center last:md:rounded-r-xl"
              >
                {data?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Price
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-left  hidden md:table-cell"
            >
              Price
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.price}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Billed
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Billed
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.billed}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Number of Admin
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Number of Admin
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.admin}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Number of Users
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Number of Users
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.users}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Unlimited Workspace and Brands
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Unlimited Workspace and Brands
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.unlimitedWorkspace ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Unlimited Message
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Unlimited Message
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.unlimitedMessage ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Unlimited Contact
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Unlimited Contact
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.unlimitedContact ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Unlimited Broadcasts
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Unlimited Broadcasts
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.unlimitedBroadcasts ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Unlimited Workspace and Brands
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Unlimited Workspace and Brands
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.unlimitedWorkspace ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Unlimited Massage
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Unlimited Massage
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.unlimitedMessage ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <td
              colSpan={5}
              className="text-center  md:bg-[var(--secondary-color-4)] text-lg py-3 font-bold text-[var(--secondary-color)]  md:rounded-xl"
            >
              Channel
            </td>
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Whatsapp Web
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Whatsapp Web
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.channels?.whatsappWeb ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Whatsapp API
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Whatsapp API
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.channels?.whatsappAPI ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Telegram
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Telegram
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.channels?.telegram ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Facebook Messenger
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Facebook Messenger
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.channels?.facebookMessenger ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Instragram
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Instragram
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.channels?.instagram ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Email
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Email
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.channels?.email ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <td
              colSpan={5}
              className="text-center md:bg-[var(--secondary-color-4)] text-lg py-3 font-bold text-[var(--secondary-color)]  md:rounded-xl"
            >
              Features
            </td>
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Dashboard
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Dashboard
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.features?.dashboard ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Team Inbox
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Team Inbox
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.features?.teamInbox ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              CRM Management
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              CRM Management
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.features?.crmManagement ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Quick Replies
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Quick Replies
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data?.features?.quickReplies ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Workflow Chatbot Automation
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Workflow Chatbot Automation
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data.features.workflowChatbotAutomation ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <th
              scope="row"
              colSpan={4}
              className="px-6 py-4 font-medium  text-[var(--secondary-color)] text-center  table-cell md:hidden"
            >
              Shared Storage Space
            </th>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium   text-left  hidden md:table-cell"
            >
              Shared Storage Space
            </th>
            {planData.map((data, idx) => (
              <td
                key={idx}
                className={`px-6 py-4 ${
                  idx + 1 === 1 ? "md:border-l" : "border-l"
                } border-[var(--secondary-color)] text-center`}
              >
                {data.features.sharedStorageSpace ? (
                  <span className="flex justify-center">
                    <MdDone className="text-[var(--secondary-color)] p-0.5 text-2xl border-[var(--secondary-color)] border rounded-full" />
                  </span>
                ) : (
                  <span className="flex justify-center">
                    <RxCross2 className="text-[#E38386] p-0.5 text-2xl border-[#E38386] border rounded-full" />
                  </span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlanTable;
