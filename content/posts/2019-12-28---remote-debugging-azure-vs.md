---
title: Remote Debugging Azure App Services with Visual Studio 2019
date: "2019-12-28T12:00:00.000Z"
template: post
draft: false
slug: "remote-debugging-azure-vs/"
category: "Azure"
tags:
  - "Remote Debugging"
  - "VS2019"
  - "Visual Studio"
  - "Azure"
  - "Azure App Services"
description: "Step-by-step guide to connecting your Visual Studio to an Azure App Service for remote debugging."
---

> Note: Currently Remote debugging is not supported for Linux OS.

This is a step-by-step guide to connect your Visual Studio into Azure for remote debugging.

After trying the Cloud Explorer in VS2019 without sucess I needed to figure out a different way to connect to Azure with the remote debugger.

Remote debugging in VS 2019:

1. Go to your App Service in the Azure Portal.
1. Click `Get publish profile` in the menu bar of the Overview section. It should look like this with more stuff:

   ```xml
   <publishData>
    <publishProfile userName="{username}"
                    userPWD="{password}"
                    destinationAppUrl="http://blah.azurewebsites.net"
                    ...
                    >
        <databases />
    </publishProfile>
    ...
   </publishData>
   ```

1. Now go to the **Configuration** sidebar and click `General settings` and turn **Remote Debugging** on.
1. In Visual Studio go to the menu bar and click `Debug > Attach to process...`
1. In the **Connection target:** box use the **destinationAppUrl** from your publish profile without **http(s):** and add the port **:4022**. (e.g. **blah-001.azurewebsites.net:4022**)
1. Press `enter` and use the **userName** and **userPWD** from the publish profile in the credentials.
1. Click the `w3wp` process and connect.

I hope this guide is useful and helps you solve some problems!
