import React from "react";
import images from "../../images/images";
import {
  Box,
  Card,
  Paper,
  CardMedia,
  Typography,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperP: {
    padding: 20
  },
  media: {
    height: 279,
    margin: 10,
    marginTop: 0
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Box m={1}>
        <Paper variant="outlined" elevation={3} className={classes.paperP}>
          <Typography gutterBottom variant="h4" component="h2">
            Лесохозяйство
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Лес - особенное богатство любой страны. Это прекрасный, способный к
            восстановлению природный комплекс, на котором, зачастую, держится
            вся экосистема. Термином «лесопользование», обычно обозначают
            использование всех ресурсов леса, всех видов лесных богатств. Можно
            выделить несколько неблагоприятных последствий пагубно влияющих на
            лес. Первым неблагоприятным фактором, является переруб древесины.
            Обычно, перерубом принято называть момент когда вырубается больше
            деревьев, чем произрастает за год, но иногда, это является не самым
            важным фактором критического отношения к лесу. Дело в том, что в
            большинстве случаев, при перерубе, забирают хорошие, сильные
            деревья, оставляя больные, а это в свою очередь ведет к еще большему
            экологическому вреду. При рубках, отстающих по темпам прироста
            древесины, наблюдается второй неблагоприятный фактор - недоруб,
            который, с частности, приводит к старению леса, снижению его
            продуктивности, заболеваниям старых деревьев. Следовательно, как
            переруб, приводит к истощению лесных ресурсов так и недоруб – к
            недоиспользованию лесоразработок.
          </Typography>
        </Paper>
      </Box>
      <Box m={1}>
        <Paper variant="outlined" elevation={3} className={classes.paperP}>
          <Typography gutterBottom variant="h4" component="h2" align="center">
            Для чего
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            Это программа создана для того чтобы помочь оптимизировать процесс
            расчета площадей для посадки или вырубки деревьев.
          </Typography>
        </Paper>
      </Box>
      <Box m={1}>
        <Card variant="outlined">
          <Grid container>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h4" align="center">
                Галерея
              </Typography>
            </Grid>
            {images.map(img => (
              <Grid item xs key={img}>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title="Леса Беларуси"
                />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default Home;
