#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision= 27e1d6d\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/HackSocNotts/hacksocnotts.co.uk/tree/master
