# ShowHeaders

## Prerequisites

### Custom Domain (DNS)

To use a custom domain (needed for Let`s Encrypt) for your application, a registration up front is mandatory. During the deployment, the service will validate whether the domain name pointing to the WebApp or not. Therefor you need to register a CNAME record for your custom domain pointing to the WebApp.

Example record:
```bash
custom FQDN              type    ttl     webapp FQDN
headers.domain.tld       CNAME   3600    {sitename}.azurewebsites.net.
showheaders.tada.red.    CNAME   3600    showheaders.azurewebsites.net.
```

*As you can see the value of Site Name, is also the subdomain name of the webapp at azurewebsites.net. and therefore predictable.*

### Service Principal

A service principal is a Azure AD entry that can be used for unattended access to Azure resources. You can consider it service account. You need a service principal with Access to your Resource Group(s) in order for the Let's Encrypt site extension to renew your certificate without manual involvement once they expire. The service principal is also used to install the certificate the first time, in order to validate that it is setup correctly.

#### Create Service Principal

1. Login to your **Azure Account** through the [current portal](https://portal.azure.com/).
2. Select **Active Directory** from the left pane.
3. Now click on **App Registrations** in the Manage column.
4. To create click on **New application registration**.
5. As name you can fill in: *"Let's Encrypt Service"*, the type must be : *"WebApp/API"* and the Sign-on URL can be: *"yourdomain.com"*.

#### Get Service Client Id and Principal Id

1. Login to your **Azure Account** through the [current portal](https://portal.azure.com/).
2. Select **Active Directory** from the left pane.
3. Now click on **App Registrations** in the Manage column.
4. Open your registered app by clicking on the name (i.e. "Azure Let's Encrypt Service").
5. The value of *Application ID* is your *Client Id* in the wizard.
6. The value of *Object ID* is your *Principal Id* in the wizard.

#### Create a Client Secret

1. Login to your **Azure Account** through the [current portal](https://portal.azure.com/).
2. Select **Active Directory** from the left pane.
3. Now click on **App Registrations** in the Manage column.
4. Open your registered app by clicking on the name (i.e. "Azure Let's Encrypt Service").
5. Click on **settings** to open the settings panel.
6. Now click on **Keys** in the API Access column.
7. Give the new key a description, select a duration and hit **Save**, after saving the Client Secret will show up in the value column. *Save that for later, You will not be able to retrieve the key later so you will want to copy it now.*

## Installation on Azure

When all the Prerequisites are completed you can start the deployment, by just clicking this button:
[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://surlt.xyz/2S6fLFI)