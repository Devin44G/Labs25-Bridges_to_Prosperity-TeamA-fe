import React, { useState } from 'react';
//antDesign
import { Layout, Menu } from 'antd';
import MapSearchBar from './MapSearchBar';
import Mapbox from './Mapbox';
import InfoDrawer from './InfoDrawer';
import { mapData } from './dummyData';

function MapMenu(props) {
  const { Sider } = Layout;

  //state for information to be displayed
  const [infoDisplay, setInfoDisplay] = useState({
    site_name: '',
    proj_stage: '',
    latitude: null,
    longitude: null,
  });

  const [clickedBridge, setClickedBridge] = useState({});
  const [visible, setVisible] = useState(false);

  //handles the click feature of the info
  const clickMarker = bridge => {
    setInfoDisplay({
      site_name: bridge.site_name,
      proj_stage: bridge.proj_stage,
      latitude: bridge.latitude,
      longitude: bridge.longitude,
    });
    setClickedBridge(bridge);
    console.log('clickMarker');
    console.log(bridge);
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <InfoDrawer
        clickedBridge={clickedBridge}
        visible={visible}
        onClose={onClose}
      ></InfoDrawer>
      <Layout
        theme="dark"
        style={{
          minHeight: '100vh',
          maxHeight: '100vh',
          minWidth: '100vw',
          maxWidth: '100vw',
        }}
      >
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item>
              <MapSearchBar mapData={mapData} />
            </Menu.Item>

            {/* When these Items are toggled, only display that which is selected*/}
            {/* Leaving this here for now, as an option -> going to mostlikely delete today for rendering bridge info */}
            {/* <Menu.Item key="1">All Markers</Menu.Item>
            <Menu.Item key="2">Village Sites</Menu.Item>
            <Menu.Item key="3">All Bridge Sites</Menu.Item>
            <Menu.Item key="4">Bridge Sites Under Construction</Menu.Item>
            <Menu.Item key="5">Proposed Bridge Sites</Menu.Item>
            <Menu.Item key="6">Rejected Bridge Sites</Menu.Item> */}
          </Menu>
        </Sider>
        <Mapbox clickMarker={clickMarker} />
      </Layout>
    </div>
  );
}

export default MapMenu;
