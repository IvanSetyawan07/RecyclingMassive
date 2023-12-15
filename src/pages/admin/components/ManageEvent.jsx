import { Tabs, Table, Spin } from "antd";
import { useGetEventsQuery } from "../../../redux/api/eventApi";

const { TabPane } = Tabs;

const ManageEventsContent = () => {
  const { data: eventData, isLoading: eventLoading } = useGetEventsQuery();
  // const { data: inputEventsData, isLoading: inputEventsLoading } = useGetEventQuery({ type: "input" });

  const eventsLoading = eventLoading;

  if (eventsLoading) {
    return <Spin size="large" className="flex justify-center items-center" />;
  }

  console.log(eventData);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["xs", "sm"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["xs", "sm", "lg"],
    },
    {
      title: "Path Image",
      dataIndex: "path_image",
      key: "path_image",
      responsive: ["lg"],
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      responsive: ["lg"],
    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
      responsive: ["lg"],
    },
  ];

  return (
    <>
      <div className="">
        <p className="font-bold text-3xl text-textColor mt-3 mb-10">Manage Events</p>
        <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)} indicatorSize={(origin) => origin - 16}>
          <TabPane tab="All Events" key="1">
            <Spin spinning={eventsLoading}>
              <Table columns={columns} dataSource={eventData ? eventData.data[0].flatMap((item) => item) : []} />
            </Spin>
          </TabPane>
          <TabPane tab="Input Events" key="2">
            <p>test</p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ManageEventsContent;
