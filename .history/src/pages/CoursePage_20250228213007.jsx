import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Chip,
  Box,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import coursesData from "./data/coursesData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/coursePage.css";

const CoursePage = () => {
  const { category } = useParams();
  const course = coursesData[category];

  const [tabIndex, setTabIndex] = useState(0); // Set default tab to Course Description

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!course) {
    return <h2 className="not-found">Course Not Found</h2>;
  }

  return (
    <></>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="full-page-container  page-transition"
    >
      <Container maxWidth="lg">
        {/* Course Title Section */}
        <Box className="course-header">
          <SchoolIcon className="course-icon" />
          <Typography variant="h3" className="course-title">
            {course.title}
          </Typography>
        </Box>

        {/* Tabs for Topics and Course Description */}
        <Card className="tabs-card">
          <Tabs
            value={tabIndex}
            onChange={(event, newIndex) => setTabIndex(newIndex)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Course Description" />
            <Tab label="Topics" />
          </Tabs>

          <CardContent>
            {/* Course Description Tab */}
            {tabIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h5" className="description-heading">
                  Course Overview:
                </Typography>
                <Typography variant="body1" className="course-description">
                  {course.description}
                </Typography>
                <Typography variant="h5" className="description-heading">
                  ✅ Available in both Online & Offline Modes
                </Typography>
                <Typography variant="body1" className="course-description">
                  This course is designed to be flexible, allowing you to learn
                  from anywhere with our online mode or join in-person classes
                  with our offline mode. Choose the learning style that works
                  best for you!
                </Typography>
                <Typography variant="h5" className="description-heading">
                  🎯 100% Placement Guarantee upon Successful Course Completion
                </Typography>
                <Typography variant="body1" className="course-description">
                  We ensure that every student gets job-ready with hands-on
                  training, real-world projects, and expert guidance. Our
                  placement assistance program connects you with top companies,
                  ensuring you land the right job after completing the course
                  successfully.
                </Typography>
              </motion.div>
            )}

            {/* Topics Tab */}
            {tabIndex === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h5" className="topics-heading">
                  Topics Covered:
                </Typography>
                <Grid container spacing={2}>
                  {course.topics.map((topic, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <ListItem className="topic-list-item">
                          <ListItemIcon>
                            <CheckCircleIcon className="check-icon" />
                          </ListItemIcon>
                          <Chip label={topic} className="topic-chip" />
                        </ListItem>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </Container>
    </motion.div>
  );
};

export default CoursePage;
