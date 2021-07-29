import React from "react";
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import useStyles from "./styles.js"

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank" >
                <CardMedia className={classes.media} image={urlToImage || "https://musikholics.com/wp-content/uploads/2018/11/world-news-broadcast-graphics-title_nu3czynsg__F0007-compressor.png?__cf_chl_managed_tk__=pmd_ffbacce9c213128f80ded33083a33661fdea4626-1627575908-0-gqNtZGzNA-KjcnBszRT6"} />
                <div className={classes.details} >
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions} >
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
