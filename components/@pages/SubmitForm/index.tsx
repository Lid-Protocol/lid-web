import React, { FC, useState, useEffect, forwardRef } from 'react';
import ReactExport from 'react-data-export';
import axios from 'axios';

import { Box, Text, Button, FlexBox, Input } from 'components/@basic';
import H2 from 'components/H2';
import { colors } from 'styles/theme';

const formatFloat = (val: number) => {
  return parseFloat(val.toFixed(2));
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const formatColumns = (data: any) => {
  return Object.keys(data).map((key) => ({ title: key }));
};

const formatData = (data: any) => {
  return Object.keys(data).map((key) => ({
    value: data[key],
  }));
};

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const SubmitForm: FC = () => {
  const [liq, setLIQ] = useState(19.82);

  const [formData, setFormData] = useState({
    tokenAddress: '',
    email: '',
    websiteUrl: '',
    userName: '',
  });

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
  };

  const onChangeLiqXETH = (value) => {
    if (value > 60 || value < 45) {
      return;
    }

    setEthDistribution((prevState) => ({
      ...prevState,
      xEth: value,
      dev: 80 - value,
    }));
  };

  const onChangeLiq = (value) => {
    if (value < 14 || value > 24) {
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

  const onSubmit = (e) => {
    axios
      .post('/', encode({ 'form-name': 'contact', ...formData }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(() => {
        alert('Success, Thanks for your submission');
      });

    e.preventDefault();
  };

  const onChangeForm = (key: string, val: any) => {
    console.log(key, val);
    setFormData((prev) => ({
      ...prev,
      [key]: val,
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

  const dataSet = [
    {
      columns: formatColumns(tokenPresale),
      data: [formatData(tokenPresale)],
    },
    {
      columns: formatColumns(tokenDistribution),
      data: [formatData(tokenDistribution)],
    },
    {
      columns: formatColumns(ethDistribution),
      data: [formatData(ethDistribution)],
    },

    {
      columns: [{ title: 'calcByLIQ' }],
      data: [[{ value: calcByLIQ }]],
    },
  ];

  return (
    <>
      <Box paddingX="5%">
        <FlexBox
          mt={5}
          pt={4}
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          marginBottom={['20px']}
        >
          <Box
            borderRadius={['10px']}
            paddingX={['40px']}
            paddingY={['20px']}
            background="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)"
            width={['100%', '30%']}
            marginBottom={['10px', '0px']}
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
            width={['100%', '30%']}
            marginBottom={['10px', '0px']}
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
            width={['100%', '30%']}
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
        <FlexBox
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          mb={5.5}
          pb={6}
        >
          <Box
            flex={1}
            borderRadius={['10px']}
            paddingX={['40px']}
            paddingY={['20px']}
            marginLeft={['0px', '10px']}
            marginTop={['10px', '0px']}
            backgroundColor="#4a4a4a"
          >
            <FlexBox justifyContent="space-between">
              <H2 color={colors.white} marginBottom={10}>
                Result
              </H2>
              <ExcelFile
                element={
                  <Button
                    as="a"
                    variant="gradient"
                    alignSelf={['inherit', 'inherit', 'flex-start']}
                  >
                    Download the Sheet
                  </Button>
                }
              >
                <ExcelSheet dataSet={dataSet} name="TermSheet" />
              </ExcelFile>
            </FlexBox>
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
              marginBottom={['5px']}
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
            <Box
              mt="15px"
              fontSize="16px"
              fontWeight="500"
              color={colors.white}
            >
              <form name="contact" data-netlify="true" onSubmit={onSubmit}>
                <Box mb="5px">
                  <label>
                    Token Address:{' '}
                    <input
                      type="text"
                      name="tokenAddress"
                      value={formData.tokenAddress}
                      onChange={(e) =>
                        onChangeForm('tokenAddress', e.target.value)
                      }
                    />
                  </label>
                </Box>
                <Box mb="5px">
                  <label>
                    Email:{' '}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => onChangeForm('email', e.target.value)}
                    />
                  </label>
                </Box>
                <Box mb="5px">
                  <label>
                    Website/TG Url:{' '}
                    <input
                      type="text"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        onChangeForm('websiteUrl', e.target.value)
                      }
                    />
                  </label>
                </Box>
                <Box mb="5px">
                  <label>
                    Discord/Telegram User Name:{' '}
                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={(e) => onChangeForm('userName', e.target.value)}
                    />
                  </label>
                </Box>
                <Box mb="5px">
                  <label>
                    Upload the sheet:{' '}
                    <input
                      type="file"
                      name="attachment"
                      onChange={(e) =>
                        onChangeForm('attachment', e.target.files![0])
                      }
                    />
                  </label>
                </Box>
                <Button
                  as="button"
                  type="submit"
                  variant="gradient"
                  alignSelf={['inherit', 'inherit', 'flex-start']}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </FlexBox>
      </Box>
    </>
  );
};

export default SubmitForm;
