import React, { useMemo, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { RiShieldCheckLine } from "@remixicon/react";
import { goalData } from "../../mockData/goalData";
import { sectionData } from "../../mockData/sectionData";

const Goal = () => {
  const { title, description } = sectionData.goal;
  const [expandedCard, setExpandedCard] = useState(null);
  const stats = useMemo(
    () => [
      { label: "Live Risk Signals", value: "120+" },
      { label: "Automated Checks", value: "24/7" },
      { label: "Fraud Touchpoints", value: "4X" },
    ],
    [],
  );

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, md: 12 },
        background: "transparent",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4}>
          <Stack
            spacing={2}
            alignItems="center"
            textAlign="center"
            data-aos="fade-up"
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: "16px",
                  background: "rgba(105, 201, 112, 0.15)",
                  border: "1px solid rgba(105, 201, 112, 0.5)",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 0 30px rgba(105, 201, 112, 0.18)",
                }}
              >
                <RiShieldCheckLine size={22} color="#69c970" />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontSize: 11,
                  color: "#9CF2A3",
                }}
              >
                Trust Layer
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                letterSpacing: "-1px",
                fontSize: { xs: 30, sm: 40, md: 54 },
                lineHeight: { xs: "36px", sm: "46px", md: "62px" },
                background:
                  "linear-gradient(82.48deg, #B7CEA6 -12.93%, #FCFEF5 92.19%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#E4E4E4",
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: 13, sm: 15, md: 16 },
                lineHeight: 1.8,
                maxWidth: 720,
              }}
            >
              {description}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: 1 }}
            >
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 999,
                    border: "1px solid rgba(156, 242, 163, 0.35)",
                    background: "rgba(8, 45, 64, 0.6)",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 12,
                    color: "#DCE8EE",
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "#9CF2A3", fontWeight: 600 }}
                  >
                    {stat.value}
                  </Box>{" "}
                  {stat.label}
                </Box>
              ))}
            </Stack>
          </Stack>

          <Box
            sx={{
              position: "relative",
              mt: { xs: 2, md: 4 },
              px: { xs: 2, md: 3 },
              "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: { xs: 12, md: "50%" },
                width: 2,
                background:
                  "linear-gradient(180deg, #69c970, rgba(105, 201, 112, 0))",
                opacity: 0.7,
              },
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              {goalData.map((goal, index) => {
                const isExpanded = expandedCard === index;
                const preview =
                  goal.description.length > 150
                    ? `${goal.description.slice(0, 150)}...`
                    : goal.description;
                const isLeft = index % 2 === 0;

                return (
                  <Box
                    key={goal.title}
                    sx={{
                      position: "relative",
                      display: { xs: "block", md: "flex" },
                      justifyContent: isLeft ? "flex-start" : "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 18,
                        left: { xs: -3, md: "50%" },
                        transform: "translateX(-50%)",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#031521",
                        border: "2px solid #69c970",
                        boxShadow: "0 0 18px rgba(105, 201, 112, 0.45)",
                        zIndex: 2,
                        animation: "pulseDot 2.6s ease-in-out infinite",
                        "@keyframes pulseDot": {
                          "0%, 100%": {
                            boxShadow: "0 0 12px rgba(105, 201, 112, 0.35)",
                          },
                          "50%": {
                            boxShadow: "0 0 26px rgba(105, 201, 112, 0.75)",
                          },
                        },
                      }}
                    />

                    <Box
                      data-aos="fade-up"
                      sx={{
                        ml: { xs: 2, md: 0 },
                        width: { xs: "100%", md: "46%" },
                        maxWidth: "100%",
                        boxSizing: "border-box",
                        borderRadius: "28px",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid rgba(156, 242, 163, 0.24)",
                        background:
                          "linear-gradient(145deg, rgba(10, 36, 52, 0.95) 0%, rgba(5, 26, 39, 0.85) 55%, rgba(3, 21, 33, 0.95) 100%)",
                        boxShadow: "0 24px 55px rgba(2, 13, 21, 0.6)",
                        animation: "panelIn 0.9s ease both",
                        animationDelay: `${0.12 * index + 0.1}s`,
                        "@keyframes panelIn": {
                          from: { opacity: 0, transform: "translateY(16px)" },
                          to: { opacity: 1, transform: "translateY(0)" },
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(120deg, rgba(105, 201, 112, 0.08), rgba(3, 21, 33, 0))",
                          opacity: 0.9,
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -120,
                          right: -120,
                          width: 220,
                          height: 220,
                          background:
                            "radial-gradient(circle, rgba(105, 201, 112, 0.22), rgba(105, 201, 112, 0))",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                        },
                        // "&:hover::after": {
                        //   opacity: 1,
                        // },
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ px: { xs: 2.5, sm: 3 }, pt: 3, pb: 2 }}
                      >
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: "50%",
                            background: "rgba(7, 38, 56, 0.95)",
                            border: "2px solid rgba(105, 201, 112, 0.5)",
                            display: "grid",
                            placeItems: "center",
                            boxShadow: "0 0 18px rgba(105, 201, 112, 0.25)",
                            animation: "iconFloat 4s ease-in-out infinite",
                            "@keyframes iconFloat": {
                              "0%, 100%": { transform: "translateY(0px)" },
                              "50%": { transform: "translateY(-6px)" },
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={goal.img}
                            alt={goal.title}
                            sx={{ width: 30, height: 30 }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              color: "#9CF2A3",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: 11,
                              letterSpacing: "0.25em",
                              textTransform: "uppercase",
                            }}
                          >
                            {`Stage ${index + 1}`}
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={{
                              color: "#F3FBF6",
                              fontFamily: "Montserrat, sans-serif",
                              fontWeight: 600,
                              fontSize: { xs: 18, sm: 20 },
                            }}
                          >
                            {goal.title}
                          </Typography>
                        </Box>
                      </Stack>

                      <Box
                        sx={{
                          px: { xs: 2.5, sm: 3 },
                          pb: 3,
                          borderTop: "1px solid rgba(156, 242, 163, 0.14)",
                          background: "rgba(6, 30, 44, 0.5)",
                        }}
                      >
                        <Typography
                          sx={{
                            mt: 2,
                            color: "#D3DEE5",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: 12.5,
                            lineHeight: 1.8,
                            wordBreak: "break-word",
                          }}
                        >
                          {goal.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Goal;
