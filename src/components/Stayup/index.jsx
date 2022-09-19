/* eslint-disable no-useless-escape */
import React from "react";
import Container from "../Container";
import {
  Box,
  Center,
  Flex,
  Input,
  Text,
  FormControl,
  Image,
} from "@chakra-ui/react";
import H2 from "../H2";
import { Button } from "../Button";
import { useForm, Controller } from "react-hook-form";
import error from "../../assets/theme/image/icon-error.svg";

const Stayup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box w={"full"} bg={"SoftBlue.400"} mt={"78px"} py={"72px"}>
      <Container>
        <Center>
          <Flex
            maxW={"444px"}
            w={"full"}
            flexDirection={"column"}
            gap={"8"}
            textAlign={"center"}
          >
            <Text
              as={"span"}
              color={"white"}
              fontWeight={"medium"}
              fontSize={"sm"}
              lineHeight={"16px"}
              letterSpacing={"0.4em"}
            >
              35,000+ already joined
            </Text>
            <H2 white>Stay up-to-date with what we`re doing</H2>
            <Box>
              <FormControl
                onSubmit={handleSubmit(onSubmit)}
                as={"form"}
                display={"flex"}
                flexDirection={{ base: "column", sm: "row" }}
                gap={"4"}
                alignItems={"flex-start"}
                textAlign={"left"}
              >
                <Controller
                  control={control}
                  rules={{
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "whoops,make sure it`s an email",
                    },
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  name="email"
                  render={({ field }) => (
                    <>
                      <Box
                        px={"2px"}
                        pt={"2px"}
                        pb={
                          (errors.email?.type === "pattern" ||
                            errors.email?.type === "required") &&
                          "8px"
                        }
                        bgColor={
                          (errors.email?.type === "pattern" ||
                            errors.email?.type === "required") &&
                          "primary.SoftRed"
                        }
                        borderRadius={"base"}
                        w={"100%"}
                        maxW={{ base: "", md: "295px" }}
                        position={"relative"}
                      >
                        <Input
                          bg={"white"}
                          pr={"37px"}
                          size={"lg"}
                          {...field}
                        />
                        {errors.email?.type === "pattern" && (
                          <>
                            <Text
                              as={"span"}
                              pl={"11px"}
                              mt={"5px"}
                              fontSize={"10px"}
                              letterSpacing={"0.08em"}
                              color={"white"}
                            >
                              {errors.email.message}
                            </Text>
                            <Image
                              src={error}
                              position={"absolute"}
                              right={"15px"}
                              top={"15px"}
                              zIndex={"overlay"}
                            />
                          </>
                        )}
                        {errors.email?.type === "required" && (
                          <>
                            <Text
                              as={"span"}
                              pl={"11px"}
                              mt={"5px"}
                              fontSize={"10px"}
                              letterSpacing={"0.08em"}
                              color={"white"}
                            >
                              {errors.email.message}
                            </Text>
                            <Image
                              src={error}
                              position={"absolute"}
                              right={"15px"}
                              top={"15px"}
                              zIndex={"overlay"}
                            />
                          </>
                        )}
                      </Box>
                    </>
                  )}
                />

                <Button submit full style={"red"}>
                  Contact Us
                </Button>
              </FormControl>
            </Box>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
};

export default Stayup;
