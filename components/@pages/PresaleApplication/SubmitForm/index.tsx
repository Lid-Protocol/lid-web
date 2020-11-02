import React, { FC, useState, useEffect, forwardRef } from 'react';
import MaterialTable from 'material-table';

import {
  Box,
  Text,
  Button,
  FlexBox,
  Image,
  List,
  Input,
} from 'components/@basic';
import ContentWrapper from 'components/ContentWrapper';
import A from 'components/A';
import H2 from 'components/H2';
import H3 from 'components/H3';

import { colors } from 'styles/theme';

import Modal from 'react-modal';

Modal.setAppElement('#__next');

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'none',
  },
  content: {
    background: '#e4e4e4',
  },
};

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const SubmitForm: FC<IProps> = ({ isOpen, closeModal }) => {
  const [tokenPresale, setTokenPresale] = useState({
    price: 132,
    referralFee: 2.5,
    hardcap: 1000,
    softcap: 500,
    totalSupply: 500000,
  });

  const [tokenDistribution, setTokenDistribution] = useState({
    farming: 20,
    presale: 30,
    xEth: 15.86,
    xLid: 2.64,
    xTusd: 1.32,
    team: 10,
    marketing: 5,
    secondMarket: 14.18,
    lid: 1,
  });

  const [ethDistribution, setEthDistribution] = useState({
    xEth: 60,
    xLid: 10,
    xTusd: 5,
    dev: 20,
    lid: 5,
  });

  const [columns, setColumns] = useState([
    { title: 'ETH Start', field: 'ethStart', filtering: false, sorting: false },
    {
      title: 'Bonus',
      field: 'bonus',
      filtering: false,
    },
    {
      title: 'Base Price',
      field: 'basePrice',
      filtering: false,
      editable: 'never',
    },
    {
      title: 'After Referral',
      field: 'afterReferral',
      filtering: false,
      editable: 'never',
    },
    {
      title: 'Presale Tokens',
      field: 'presaleTokens',
      filtering: false,
      editable: 'never',
    },
  ]);

  const [bonusRange, setBonusRange] = useState([
    {
      ethStart: 0,
      bonus: 25,
      basePrice: 165,
      afterReferral: 161,
      presaleTokens: 16517,
    },
    {
      ethStart: 100,
      bonus: 20,
      basePrice: 159,
      afterReferral: 155,
      presaleTokens: 15856,
    },
    {
      ethStart: 200,
      bonus: 15,
      basePrice: 152,
      afterReferral: 148,
      presaleTokens: 15195,
    },
    {
      ethStart: 300,
      bonus: 12.5,
      basePrice: 149,
      afterReferral: 145,
      presaleTokens: 29730,
    },
    {
      ethStart: 500,
      bonus: 10,
      basePrice: 145,
      afterReferral: 142,
      presaleTokens: 72673,
    },
  ]);

  const onChangeLiqXETH = (value) => {
    if (value > 80 || value < 0) {
      return;
    }

    setEthDistribution((prevState) => ({
      ...prevState,
      xEth: value,
      dev: 80 - value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        marginBottom={['20px']}
      >
        <Box
          borderRadius={['10px']}
          paddingX={['40px']}
          paddingY={['20px']}
          background="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
          width="30%"
        >
          <H2 color={colors.white} marginBottom={10}>
            TOKEN PRESALE
          </H2>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Price
            </Text>
            <Input
              type="text"
              fontSize="14px"
              disabled={true}
              value={tokenPresale.price}
            />
          </FlexBox>

          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Referral Fee
            </Text>
            <Input
              type="text"
              fontSize="14px"
              disabled={true}
              value={`${tokenPresale.referralFee}%`}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Hardcap(ETH)
            </Text>
            <Input type="text" fontSize="16px" value={tokenPresale.hardcap} />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Softcap(ETH)
            </Text>
            <Input type="text" fontSize="16px" value={tokenPresale.softcap} />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Total Supply
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={tokenPresale.totalSupply}
            />
          </FlexBox>
        </Box>
        <Box
          borderRadius={['10px']}
          paddingX={['40px']}
          paddingY={['20px']}
          background="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
          width="30%"
        >
          <H2 color={colors.white} marginBottom={10}>
            TOKEN DISTRIBUTION
          </H2>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Farming
            </Text>
            <Input
              type="text"
              fontSize="14px"
              value={`${tokenDistribution.farming}%`}
            />
          </FlexBox>

          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Team
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${tokenDistribution.team}%`}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Marketing
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${tokenDistribution.marketing}%`}
              disabled={true}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              2nd Marketing
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${tokenDistribution.secondMarket}%`}
              disabled={true}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              LID
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${tokenDistribution.lid}%`}
              disabled={true}
            />
          </FlexBox>
        </Box>
        <Box
          borderRadius={['10px']}
          paddingX={['40px']}
          paddingY={['20px']}
          background="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
          width="30%"
        >
          <H2 color={colors.white} marginBottom={10}>
            ETH DISTRIBUTION
          </H2>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Liq (XXX/ETH)
            </Text>
            <Input
              type="text"
              fontSize="14px"
              value={ethDistribution.xEth}
              onChange={(e) => onChangeLiqXETH(e.target.value)}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Liq (XXX/LID)
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${ethDistribution.xLid}%`}
              disabled={true}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Liq (XXX/TUSD)
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${ethDistribution.xTusd}%`}
              disabled={true}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              DEV
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${ethDistribution.dev}%`}
              disabled={true}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              LID
            </Text>
            <Input
              type="text"
              fontSize="16px"
              value={`${ethDistribution.lid}%`}
              disabled={true}
            />
          </FlexBox>
        </Box>
      </FlexBox>

      <MaterialTable
        title="Bonus Range"
        icons={tableIcons}
        columns={columns}
        data={bonusRange}
        options={{
          search: false,
          sorting: false,
          paging: false,
        }}
        editable={{
          onRowAdd: (newData) => {
            setBonusRange([...bonusRange, newData]);
          },
          onRowUpdate: (newData, oldData) => {
            const dataUpdate = [...bonusRange];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setBonusRange([...dataUpdate]);
          },
          onRowDelete: (oldData) => {
            const dataDelete = [...bonusRange];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setBonusRange([...dataDelete]);
          },
        }}
      />
    </Modal>
  );
};

export default SubmitForm;
