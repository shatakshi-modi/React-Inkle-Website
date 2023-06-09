import React, { useEffect, useState } from "react";
import { getData } from "./services";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Pagination,
  Box,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import "./style.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { tagColourMap } from "../utils";
import { getMailData } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import EmailModel from "./EmailModel";
import { ArrowForwardIos } from "@mui/icons-material";

const EmailPanel = () => {
  const { mail, loading } = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [mailData, setMailData] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const itemsPerPage = 10;
  const isMobile = useMediaQuery("(min-width:700px)");
  let [searchParams] = useSearchParams();

  useEffect(() => {
    let filterPath = location.pathname.split("/")[1];
    let searchFilter = searchParams.get("search");
    if (mail) {
      let u = [];

      if (filterPath == "allMail") {
        u = mail.filter((e) => {
          if (searchFilter) {
            return (
              e.subject.includes(searchFilter) ||
              e.body.includes(searchFilter) ||
              e.tag === searchFilter
            );
          } else {
            return true;
          }
        });
      } else if (filterPath != "allMail") {
        u = mail.filter((e) => e.tag == filterPath);

        if (searchFilter) {
          u = u.filter(
            (e) =>
              e.subject.includes(searchFilter) ||
              e.body.includes(searchFilter) ||
              e.tag === searchFilter
          );
        }
      } else {
        u = mail;
      }

      setData(u);
      setCurrentPage(1);
    }
  }, [mail, location.pathname, searchParams]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  if (loading) {
    <Skeleton></Skeleton>;
  }
  if (data.length) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);

    return (
      <div
        style={{
          backgroundColor: "#F7F7F7",
          borderRadius: "20px",
          marginRight: isMobile ? "10px" : "8px",
        }}
      >
        <Box sx={{ paddingLeft: "8px", paddingRight: "8px" }}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            align="left"
            sx={{ mt: 2, mr: 2, pt: 2 }}
          />
          <List sx={{ width: "100%" }}>
            {displayedData.map((e) => (
              <ListItem
                key={e.id}
                alignItems="flex-start"
                onClick={() => {
                  setOpen(true);
                  setMailData(e);
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={e.tag.toUpperCase()}
                    src="/static/images/avatar/1.jpg"
                    style={{ backgroundColor: tagColourMap[e.tag] }}
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    borderBottomColor: "#808080",
                    borderBottomStyle: "solid",
                    borderBottomWidth: "0.1em",
                    pb: 2,
                  }}
                  primary={
                    <div>
                      {e.subject}{" "}
                      <ArrowForwardIos
                        sx={{ fontSize: "0.8rem" }}
                      ></ArrowForwardIos>
                    </div>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {e.body}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {mailData && (
          <EmailModel
            open={open}
            setOpen={setOpen}
            data={mailData}
          ></EmailModel>
        )}
      </div>
    );
  } else if (!data.length && !loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No Data
      </div>
    );
  }

  return null;
};

export default EmailPanel;
