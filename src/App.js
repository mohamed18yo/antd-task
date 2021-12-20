import "./App.css";
import {
  Button,
  Form,
  Checkbox,
  Input,
  Select,
  Typography,
  Row,
  Col,
} from "antd";
import "antd/dist/antd.css";

const { TextArea } = Input;
function App() {
  const { Option } = Select;

  return (
    <div className="App">
      <div className="contianer">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          style={{ width: "50%", margin: "auto" }}
        >
          <Row style={{ justifyContent: "space-between" }}>
            <Form.Item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              label="Field"
              name="Field"
            ></Form.Item>
            <Select
              defaultValue="lucy"
              style={{ width: "60% " }}
              onChange={() => {}}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Row>

          <Typography.Text style={{ marginBottom: "1rem" }}>
            From: Iv_alldata_for_statment
          </Typography.Text>
          <Row style={{ alignItems: "center" }}>
            <Form.Item
              label="operation"
              name="checked"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Checkbox
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                label="test"
                onChange={() => ``}
              ></Checkbox>
            </Form.Item>

            <Form.Item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "50%",
              }}
            >
              <Select
                defaultValue="lucy"
                style={{ width: "80% " }}
                onChange={() => {}}
              >
                <Option value="jack">Is_Equle</Option>
                <Option value="lucy">Is_Equle</Option>
              </Select>
            </Form.Item>

            <Checkbox
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              label="test"
              onChange={() => ``}
            ></Checkbox>
            <Form.Item
              label="Ignor Case"
              name="Ignor Case"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            ></Form.Item>
          </Row>
          <Row>
            <Form.Item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              label="value"
              name="value"
            ></Form.Item>
            <Input style={{ width: "60%" }} />
          </Row>

          <Row width="100%" style={{ justifyContent: "space-between" }}>
            <Typography.Text style={{ marginBottom: "1rem" }}>
              Condidation Spcefied
            </Typography.Text>
            <Typography.Text style={{ marginBottom: "1rem" }}>
              Ignor Case
            </Typography.Text>
          </Row>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 120 }}
            onChange={() => ``}
          />
          <Row justify="space-between" style={{ marginTop: "1rem" }} align="">
            <Col span={4}>
              <Button type="primary">Save</Button>
            </Col>
            <Col span={4}>
              <Button type="primary">Restore</Button>
            </Col>
            <Col span={4}>
              <Button type="primary">Ok</Button>
            </Col>
            <Col span={4}>
              <Button type="primary">Cancel</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default App;
