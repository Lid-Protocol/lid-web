import React, { FC, useState, useEffect, forwardRef, useMemo } from 'react';
import MaterialTable from 'material-table';

import { Box, Text, Button, FlexBox, Input } from 'components/@basic';
import H2 from 'components/H2';

import { colors } from 'styles/theme';

import Modal from 'react-modal';

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

Modal.setAppElement('#__next');

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

const formatFloat = (val: number) => {
  return parseFloat(val.toFixed(2));
};

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SubmitForm: FC<IProps> = ({ isOpen, closeModal }) => {
  const [liq, setLIQ] = useState(19.82);

  const [tokenPresale, setTokenPresale] = useState({
    price: 0,
    referralFee: 2.5,
    hardcap: 1000,
    softcap: 500,
    totalSupply: 500000,
  });

  const [tokenDistribution, setTokenDistribution] = useState({
    farming: 20,
    presale: 30,
    xEth: 0,
    xLid: 0,
    xTusd: 0,
    team: 10,
    marketing: 5,
    secondMarket: 0,
    lid: 1,
  });

  const [ethDistribution, setEthDistribution] = useState({
    xEth: 60,
    xLid: 10,
    xTusd: 5,
    dev: 20,
    lid: 5,
  });

  const [bonusRange, setBonusRange] = useState([
    {
      ethStart: 0,
      bonus: 5,
      basePrice: 0,
      afterReferral: 0,
      presaleTokens: 0,
      tableData: {
        id: 0,
      },
    },
    {
      ethStart: 100,
      bonus: 4.5,
      basePrice: 0,
      afterReferral: 0,
      presaleTokens: 0,
      tableData: {
        id: 1,
      },
    },
    {
      ethStart: 200,
      bonus: 4,
      basePrice: 0,
      afterReferral: 0,
      presaleTokens: 0,
      tableData: {
        id: 2,
      },
    },
    {
      ethStart: 300,
      bonus: 3.5,
      basePrice: 149,
      afterReferral: 145,
      presaleTokens: 29730,
      tableData: {
        id: 3,
      },
    },
    {
      ethStart: 500,
      bonus: 3,
      basePrice: 0,
      afterReferral: 0,
      presaleTokens: 0,
      tableData: {
        id: 4,
      },
    },
  ]);

  const updateData = () => {
    const totalEthLiq =
      ethDistribution.xEth + ethDistribution.xLid + ethDistribution.xTusd;
    const tokenXEth = (ethDistribution.xEth / totalEthLiq) * liq;

    const tokenXLid = (ethDistribution.xLid / totalEthLiq) * liq;

    const tokenXTusd = (ethDistribution.xTusd / totalEthLiq) * liq;

    const tokenSecondMarket =
      64 -
      tokenDistribution.team -
      tokenDistribution.farming -
      tokenXEth -
      tokenXLid -
      tokenXTusd;
    const tokenPrice =
      (tokenPresale.totalSupply * tokenXEth) /
      tokenPresale.hardcap /
      ethDistribution.xEth;

    setTokenDistribution((prevState) => ({
      ...prevState,
      xEth: formatFloat(tokenXEth),
      xLid: formatFloat(tokenXLid),
      xTusd: formatFloat(tokenXTusd),
      secondMarket: formatFloat(tokenSecondMarket),
    }));

    setTokenPresale((prevState) => ({
      ...prevState,
      price: formatFloat(tokenPrice),
    }));

    const updatedRange: any[] = [];
    for (let i = 0; i < bonusRange.length; i++) {
      const basePrice = (1 + bonusRange[i].bonus / 100) * tokenPrice;

      updatedRange[i] = {
        ...bonusRange[i],
        basePrice: formatFloat(basePrice),
        afterReferral: formatFloat(basePrice / 1.25),
        presaleTokens: formatFloat(
          basePrice *
            (i === bonusRange.length - 1
              ? tokenPresale.hardcap - bonusRange[i].ethStart
              : bonusRange[i + 1].ethStart - bonusRange[i].ethStart)
        ),
      };
    }
    setBonusRange(updatedRange);
  };

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

  const onChangeLiq = (value) => {
    if (value < 0 || value >= 100) {
      return;
    }

    setLIQ(value);
  };

  const onChangePresale = (key: string, value: number) => {
    if (value < 0) {
      return;
    }

    setTokenPresale((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onChangeTokenDistribution = (key: string, value: number) => {
    if (value < 0) {
      return;
    }

    setTokenDistribution((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const { xEth } = ethDistribution;
  const { hardcap, softcap, totalSupply, price } = tokenPresale;
  const { farming, team } = tokenDistribution;

  useEffect(() => {
    updateData();
  }, [liq, xEth, hardcap, softcap, totalSupply, farming, team]);

  useEffect(() => {
    updateData();
  }, []);

  let calcByLIQ = 0;
  bonusRange.map((el) => (calcByLIQ = calcByLIQ + el.presaleTokens));

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
              value={tokenPresale.price}
              readOnly
              disabled
            />
          </FlexBox>

          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Referral Fee
            </Text>
            <Input
              type="text"
              fontSize="14px"
              defaultValue={`${tokenPresale.referralFee}%`}
              disabled
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Hardcap(ETH)
            </Text>
            <Input
              type="number"
              fontSize="16px"
              value={tokenPresale.hardcap}
              onChange={(e) =>
                onChangePresale('hardcap', Number(e.target.value))
              }
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Softcap(ETH)
            </Text>
            <Input
              type="number"
              fontSize="16px"
              value={tokenPresale.softcap}
              onChange={(e) =>
                onChangePresale('softcap', Number(e.target.value))
              }
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Total Supply
            </Text>
            <Input
              type="number"
              fontSize="16px"
              value={tokenPresale.totalSupply}
              onChange={(e) =>
                onChangePresale('totalSupply', Number(e.target.value))
              }
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
              type="number"
              fontSize="14px"
              value={tokenDistribution.farming}
              onChange={(e) =>
                onChangeTokenDistribution('farming', Number(e.target.value))
              }
            />
          </FlexBox>

          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Team
            </Text>
            <Input
              type="number"
              fontSize="16px"
              value={tokenDistribution.team}
              onChange={(e) =>
                onChangeTokenDistribution('team', Number(e.target.value))
              }
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Marketing
            </Text>
            <Input
              type="text"
              fontSize="16px"
              defaultValue={`${tokenDistribution.marketing}%`}
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
              readOnly
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
              defaultValue={`${tokenDistribution.lid}%`}
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
              type="number"
              fontSize="16px"
              value={ethDistribution.xEth}
              onChange={(e: any) => onChangeLiqXETH(Number(e.target.value))}
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              Liq (XXX/LID)
            </Text>
            <Input
              type="text"
              fontSize="16px"
              defaultValue={`${ethDistribution.xLid}%`}
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
              defaultValue={`${ethDistribution.xTusd}%`}
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
              readOnly
              disabled
            />
          </FlexBox>
          <FlexBox marginBottom="10px" flexDirection="column">
            <Text fontSize="16px" fontWeight="500" color={colors.white}>
              LID
            </Text>
            <Input
              type="text"
              fontSize="16px"
              defaultValue={`${ethDistribution.lid}%`}
              disabled
            />
          </FlexBox>
        </Box>
      </FlexBox>
      <FlexBox flexWrap="wrap" justifyContent="space-between">
        <Box flex={1}>
          <MaterialTable
            title="Bonus Range"
            icons={tableIcons}
            columns={[
              {
                title: 'ETH Start',
                field: 'ethStart',
                filtering: false,
                sorting: false,
              },
              {
                title: 'Bonus',
                field: 'bonus',
                filtering: false,
                editable: 'never',
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
            ]}
            data={bonusRange}
            options={{
              search: false,
              sorting: false,
              paging: false,
            }}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const updatedIndex = oldData!.tableData.id;
                    const updatedEthStart = Number(newData.ethStart);
                    const maxEthStart =
                      updatedIndex < 4
                        ? bonusRange[updatedIndex + 1].ethStart
                        : hardcap;
                    if (
                      isNaN(updatedEthStart) ||
                      updatedEthStart > maxEthStart
                    ) {
                      reject();
                    } else {
                      let updatedRange = bonusRange;
                      updatedRange[updatedIndex].ethStart = updatedEthStart;

                      updatedRange.map((data, index) => {
                        const basePrice = (1 + data.bonus / 100) * price;
                        return {
                          ...data,
                          basePrice: formatFloat(basePrice),
                          afterReferral: formatFloat(basePrice / 1.25),
                          presaleTokens: formatFloat(
                            basePrice *
                              (index === updatedRange.length - 1
                                ? hardcap - data.ethStart
                                : updatedRange[index + 1].ethStart -
                                  data.ethStart)
                          ),
                        };
                      });
                      setBonusRange(updatedRange);
                      resolve();
                    }
                  }, 1000);
                }),
            }}
          />
        </Box>

        <Box
          borderRadius={['10px']}
          paddingX={['40px']}
          paddingY={['20px']}
          flex={1}
          marginLeft={'10px'}
          backgroundColor="#4a4a4a"
        >
          <H2 color={colors.white} marginBottom={10}>
            Result
          </H2>
          <FlexBox marginBottom="10px" flexDirection="row">
            <Text
              fontSize="16px"
              fontWeight="500"
              marginRight={['10px']}
              color={colors.white}
            >
              Liq:
            </Text>
            <Input
              type="number"
              fontSize="14px"
              maxWidth={['200px']}
              value={liq}
              onChange={(e: any) => onChangeLiq(Number(e.target.value))}
            />
          </FlexBox>
          <Text
            fontSize="16px"
            fontWeight="500"
            marginBottom={['5px']}
            color={colors.white}
            display="block"
          >
            {`Presale: ${tokenDistribution.presale}%`}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color={colors.white}
            marginBottom={['5px']}
            display="block"
          >
            {`Liq (XXX/ETH): ${tokenDistribution.xEth}%`}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color={colors.white}
            marginBottom={['5px']}
            display="block"
          >
            {`Liq (XXX/LID): ${tokenDistribution.xLid}%`}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color={colors.white}
            marginBottom={['25px']}
            display="block"
          >
            {`Liq (XXX/TUSD): ${tokenDistribution.xTusd}%`}
          </Text>

          <Text
            fontSize="16px"
            fontWeight="500"
            color={colors.white}
            marginBottom={['5px']}
            display="block"
          >
            {`Presale Token: ${tokenPresale.totalSupply * 0.3}`}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color={colors.white}
            marginBottom={['5px']}
            display="block"
          >
            {`Presale Token(from LIQ %): ${formatFloat(calcByLIQ)}`}
          </Text>

          <Button
            as="button"
            variant="gradient"
            mt={5}
            mr={4}
            mb={[4, 0]}
            alignSelf={['inherit', 'inherit', 'flex-start']}
            // onClick={openModal}
            // href="mailto:team@lid.sh"
          >
            Submit
          </Button>
        </Box>
      </FlexBox>
    </Modal>
  );
};

export default SubmitForm;
