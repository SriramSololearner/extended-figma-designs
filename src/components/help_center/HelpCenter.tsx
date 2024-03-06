import { Box, Button, Grid, Modal, Stack, TextField } from "@mui/material";
import {
  AddCircleOutlineRounded,
  Close,
  East,
  List,
  AddCircleOutlined,
} from "@mui/icons-material";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { addNewQuery, replyToQuery } from "../../redux/reducers/slice";
interface Istate {
  query: string;
  open: boolean;
  error: string;
  queryReply: string;
}

const HelpCenter = () => {
  const { queries } = useSelector((state: RootState) => state.extended);
  const dispatch = useDispatch();
  const [open, setOpen] = useState<Istate["open"]>(false);
  const [queryId, setQueryId] = useState<number>();
  const [modal, setModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [query, setQuery] = useState<Istate["query"]>("");
  const [queryReply, setQueryReply] = useState<Istate["queryReply"]>("");
  const [err, setErr] = useState<Istate["error"]>();
  const modalOpen = (queryId: number) => {
    setModal(true);
    setQueryId(queryId);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handlerSend = () => {
    dispatch(addNewQuery(query));
    setQuery("");
    handleClose();
  };

  const queryObj = queries.find((obj) => obj.id === queryId);

  // const handleReply = () => {
  //   if (queryReply) {
  //     dispatch(replyToQuery({ queryReply, queryId }));
  //   }
  //   if (!query) {
  //     setErr("Please enter your message!");
  //   }
  //   setQueryReply("");
  // };

  const handleReply = () => {
    if (queryReply.trim() === "") {
      setErr("This field is required. Please enter a valid message.");
      return;
    }
    if (queryReply.trim() !== "") {
      dispatch(replyToQuery({ queryReply, queryId }));
      setQueryReply("");
      setErr("");
    }
  };

  const handleFocus = () => {
    if (queryReply === "") {
      setErr("");
    }
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.addBtn} onClick={handleOpen}>
        <AddCircleOutlined sx={styles.addBtnIcon} />
      </Box>
      <Box sx={styles.navBar}>
        <Stack direction={"row"} alignItems={"center"} gap={2} mx={2}>
          <List sx={styles.listIcon} />
          <Box sx={styles.helpCenterTxt}>Help Center</Box>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"flex-end"}
          onClick={handleOpen}
        >
          <Button
            variant="contained"
            sx={styles.addQueryBtn}
            startIcon={<AddCircleOutlineRounded />}
          >
            Ask New Query
          </Button>
        </Stack>
        <Box sx={styles.queriesHeader}>
          <Box sx={styles.queriesHeaderTxt}>
            You can find the answers to the previously asked queries
          </Box>
        </Box>

        <Grid container sx={styles.gridContainer} spacing={2}>
          {queries.map((query) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={query.id}>
              <Stack direction={"column"} sx={styles.gridItem}>
                <Box sx={styles.queryTxt}>{query.queryTitle}</Box>
                <East
                  sx={styles.arrowIcon}
                  onClick={() => modalOpen(query.id)}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={styles.modalContainer}
            component={"form"}
            onSubmit={handlerSend}
          >
            <Box sx={styles.closeIcon}>
              <Close sx={styles.closeElement} onClick={handleClose} />
            </Box>
            <TextField
              fullWidth
              required
              id="outlined-textarea"
              label="Query"
              placeholder="Enter Your Query"
              rows={3}
              value={query}
              multiline
              onChange={(event) => setQuery(event.target.value)}
              sx={styles.multiLineInput}
            />
            <Button variant="contained" sx={styles.sendBtn} type="submit">
              send message
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={modal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={styles.modalContainer}
            component={"form"}
            onSubmit={handleReply}
          >
            <Box sx={styles.closeIcon}>
              <Close sx={styles.closeElement} onClick={handleCloseModal} />
            </Box>
            <Stack gap={1} sx={styles.queryTitle}>
              <Box sx={styles.queryTitleTxt}> {queryObj?.queryTitle}</Box>
              <Box sx={styles.queryTitleDate}>{queryObj?.date}</Box>
            </Stack>

            <Box sx={styles.commentsContainer}>
              <Box sx={styles.commentHeader}>Comment</Box>
              {queryObj?.comments?.map((Comment) => (
                <Box key={Comment.id} sx={styles.query}>
                  {Comment.query}
                </Box>
              ))}
            </Box>

            <TextField
              fullWidth
              id="outlined-textarea"
              label="Query"
              placeholder="Enter Your Query"
              rows={3}
              multiline
              name="queryReply"
              value={queryReply}
              sx={styles.multiLineInput}
              onChange={(event) => setQueryReply(event.target.value)}
              error={!!err}
              helperText={err}
            />
            <Button
              variant="contained"
              sx={styles.sendBtn}
              onClick={handleReply}
            >
              Reply
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default HelpCenter;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 240, md: 500, lg: 600 },
  height: { xs: 150, md: 150 },
  bgcolor: "background.paper",
  border: 0,
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 250, sm: 400, md: 450 },
  height: { xs: 300, md: 300 },
  bgcolor: "background.paper",
  border: 0,
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};
