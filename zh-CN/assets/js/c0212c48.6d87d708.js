"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[28008],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,d=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return n?o.createElement(d,r(r({ref:t},m),{},{components:n})):o.createElement(d,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return m},toc:function(){return h},default:function(){return u}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],s={},l="Become Apache SeaTunnel Committer",c={unversionedId:"contribution_guide/committer",id:"contribution_guide/committer",title:"Become Apache SeaTunnel Committer",description:"SeaTunnel Podling Project Management Committee (PPMC) is responsible for assessing the contributions of candidates.",source:"@site/community/contribution_guide/committer.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/committer",permalink:"/zh-CN/community/contribution_guide/committer",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/contribution_guide/committer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8ba2\u9605\u90ae\u4ef6\u5217\u8868",permalink:"/zh-CN/community/contribution_guide/subscribe"},next:{title:"Become Apache Release Manager",permalink:"/zh-CN/community/contribution_guide/release"}},m={},h=[{value:"Committer",id:"committer",level:2},{value:"Nominate new committer",id:"nominate-new-committer",level:3},{value:"Invite new committer",id:"invite-new-committer",level:3},{value:"Invitation acceptance process",id:"invitation-acceptance-process",level:3},{value:"Set up the Apache ID and dev env",id:"set-up-the-apache-id-and-dev-env",level:3},{value:"Committer rights, duties, and responsibilities",id:"committer-rights-duties-and-responsibilities",level:3},{value:"Project Management Committee",id:"project-management-committee",level:2}],p={toc:h};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"become-apache-seatunnel-committer"},"Become Apache SeaTunnel Committer"),(0,a.kt)("p",null,"SeaTunnel Podling Project Management Committee (PPMC) is responsible for assessing the contributions of candidates."),(0,a.kt)("p",null,"Like many Apache projects, SeaTunnel welcome all contributions, including code contributions, blog entries, guides for new users, public speeches, and enhancement of the project in various ways."),(0,a.kt)("p",null,"Becoming a committer\nTo get started contributing to SeaTunnel, learn how to contribute \u2013 anyone can submit patches, documentation and examples to the project."),(0,a.kt)("p",null,"The PPMC regularly adds new committers from the active contributors, based on their contributions to SeaTunnel. The qualifications for new committers include:"),(0,a.kt)("p",null,"Sustained contributions to SeaTunnel: Committers should have a history of major contributions to SeaTunnel. An ideal committer will have contributed broadly throughout the project, and have contributed at least one major component where they have taken an \u201cownership\u201d role. An ownership role means that existing contributors feel that they should run patches for this component by this person.\nQuality of contributions: Committers more than any other community member should submit simple, well-tested, and well-designed patches. In addition, they should show sufficient expertise to be able to review patches, including making sure they fit within SeaTunnel\u2019s engineering practices (testability, documentation, API stability, code style, etc). The committership is collectively responsible for the software quality and maintainability of SeaTunnel. Note that contributions to critical parts of SeaTunnel, like its core and SQL modules, will be held to a higher standard when assessing quality. Contributors to these areas will face more review of their changes.\nCommunity involvement: Committers should have a constructive and friendly attitude in all community interactions. They should also be active on the dev and user list and help mentor newer contributors and users. In design discussions, committers should maintain a professional and diplomatic approach, even in the face of disagreement."),(0,a.kt)("h2",{id:"committer"},"Committer"),(0,a.kt)("h3",{id:"nominate-new-committer"},"Nominate new committer"),(0,a.kt)("p",null,"In SeaTunnel, ",(0,a.kt)("strong",{parentName:"p"},"new committer nomination")," could only be officially started by existing PPMC members. If a new committer feels that he/she is qualified, he/she should contact any existing PPMC member and discuss. If this is agreed among some members of the PPMC, the process will kick off."),(0,a.kt)("p",null,"The following steps are recommended (to be initiated only by an existing PPMC member):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Send an email titled ",(0,a.kt)("inlineCode",{parentName:"li"},"[DISCUSS] Promote xxx as new committer")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"private@seatunnel.apache.org"),". List the important contributions of the candidate,\nso you could gather support from other PPMC members for your proposal."),(0,a.kt)("li",{parentName:"ol"},"Keep the discussion open for more than 3 days but no more than 1 week, unless there is any express objection or concern."),(0,a.kt)("li",{parentName:"ol"},"If the PPMC generally agrees to the proposal, send an email titled ",(0,a.kt)("inlineCode",{parentName:"li"},"[VOTE] Promote xxx as new committer")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"private@seatunnel.apache.org"),"."),(0,a.kt)("li",{parentName:"ol"},"Keep the voting process open for more than 3 days, but no more than 1 week. Consider the result as ",(0,a.kt)("inlineCode",{parentName:"li"},"Consensus Approval")," if there are three +1 votes and\n+1 votes > -1 votes."),(0,a.kt)("li",{parentName:"ol"},"Send an email titled ",(0,a.kt)("inlineCode",{parentName:"li"},"[RESULT][VOTE] Promote xxx as new committer")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"private@seatunnel.apache.org"),", and list the voting details, including who the voters are.")),(0,a.kt)("h3",{id:"invite-new-committer"},"Invite new committer"),(0,a.kt)("p",null,"The PPMC member who starts the promotion is responsible for sending an invitation to the new committer and guiding him/her to set up the ASF env."),(0,a.kt)("p",null,"The PPMC member should send an email using the following template to the new committer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"To: <invitee name>@gmail.com\nCc: private@seatunnel.apache.org\nSubject: Invitation to become SeaTunnel committer: <invitee name>\n\nHello <invitee name>,\n\nThe SeaTunnel Project Management Committee] (PPMC) \nhereby offers you committer privileges to the project. These privileges are\noffered on the understanding that you'll use them\nreasonably and with common sense. We like to work on trust\nrather than unnecessary constraints.\n\nBeing a committer enables you to more easily make \nchanges without needing to go through the patch \nsubmission process. \n\nBeing a committer does not require you to \nparticipate any more than you already do. It does \ntend to make one even more committed.  You will \nprobably find that you spend more time here.\n\nOf course, you can decline and instead remain as a \ncontributor, participating as you do now.\n\nA. This personal invitation is a chance for you to \naccept or decline in private.  Either way, please \nlet us know in reply to the [private@SeaTunnel.apache.org] \naddress only.\n\nB. If you accept, the next step is to register an iCLA:\n    1. Details of the iCLA and the forms are found \n    through this link: http://www.apache.org/licenses/#clas\n\n    2. Instructions for its completion and return to \n    the Secretary of the ASF are found at\n    http://www.apache.org/licenses/#submitting\n\n    3. When you transmit the completed iCLA, request \n    to notify the Apache SeaTunnel and choose a \n    unique Apache id. Look to see if your preferred \n    id is already taken at \n    http://people.apache.org/committer-index.html     \n    This will allow the Secretary to notify the PPMC \n    when your iCLA has been recorded.\n\nWhen recording of your iCLA is noticed, you will \nreceive a follow-up message with the next steps for \nestablishing you as a committer.\n")),(0,a.kt)("h3",{id:"invitation-acceptance-process"},"Invitation acceptance process"),(0,a.kt)("p",null,"The new committer should reply to ",(0,a.kt)("inlineCode",{parentName:"p"},"private@seatunnel.apache.org")," (choose ",(0,a.kt)("inlineCode",{parentName:"p"},"reply all"),"), and express his/her intention to accept the invitation.\nThen, this invitation will be treated as accepted by the project's PPMC. Of course, the new committer may also choose to decline the invitation."),(0,a.kt)("p",null,"Once the invitation has been accepted, the new committer has to take the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Subscribe to ",(0,a.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),". Usually this is already done."),(0,a.kt)("li",{parentName:"ol"},"Choose a Apache ID that is not on the ",(0,a.kt)("a",{parentName:"li",href:"http://people.apache.org/committer-index.html"},"apache committers list page"),"."),(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/icla.pdf"},"ICLA"),"  (If the new committer contributes to the project as a day job, ",(0,a.kt)("a",{parentName:"li",href:"http://www.apache.org/licenses/cla-corporate.pdf"},"CCLA"),"  is expected)."),(0,a.kt)("li",{parentName:"ol"},"After filling in the ",(0,a.kt)("inlineCode",{parentName:"li"},"icla.pdf")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"ccla.pdf"),") with the correct information, print, sign it by hand,  scan it as an PDF, and send it as an attachment to ",(0,a.kt)("a",{parentName:"li",href:"mailto:secretary@apache.org"},"secretary@apache.org"),". (If electronic signature is preferred, please follow the steps on ",(0,a.kt)("a",{parentName:"li",href:"http://www.apache.org/licenses/contributor-agreements.html#submitting"},"this page"),")"),(0,a.kt)("li",{parentName:"ol"},"The PPMC will wait for the Apache secretary to confirm the ICLA (or CCLA) filed. The new committer and PPMC will receive the following email:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Dear XXX,\n\nThis message acknowledges receipt of your ICLA, which has been filed in the Apache Software Foundation records.\n\nYour account has been requested for you and you should receive email with next steps\nwithin the next few days (can take up to a week).\n\nPlease refer to https://www.apache.org/foundation/how-it-works.html#developers\nfor more information about roles at Apache.\n")),(0,a.kt)("p",null,"In the unlikely event that the account has not yet been requested, the PPMC member should contact the project V.P..\nThe V.P. could request through the ",(0,a.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/officers/acreq"},"Apache Account Submission Helper Form"),"."),(0,a.kt)("p",null,"After several days, the new committer will receive an email confirming creation of the account, titled ",(0,a.kt)("inlineCode",{parentName:"p"},"Welcome to the Apache Software Foundation (ASF)!"),".\nCongratulations! The new committer now has an official Apache ID."),(0,a.kt)("p",null,"The PPMC member should add the new committer to the official committer list through ",(0,a.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/roster/ppmc/seatunnel"},"roster"),"."),(0,a.kt)("h3",{id:"set-up-the-apache-id-and-dev-env"},"Set up the Apache ID and dev env"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://id.apache.org/"},"Apache Account Utility Platform"),", create your password, set up your personal mailbox (",(0,a.kt)("inlineCode",{parentName:"li"},"Forwarding email address"),") and GitHub account(",(0,a.kt)("inlineCode",{parentName:"li"},"Your GitHub Username"),"). An organizational invite will be sent to you via email shortly thereafter (within 2 hours)."),(0,a.kt)("li",{parentName:"ol"},"If you would like to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"xxx@apache.org")," email service, please refer to ",(0,a.kt)("a",{parentName:"li",href:"https://infra.apache.org/committer-email.html"},"here"),". Gmail is recommended, because this forwarding mode is not easy to find in most mailbox service settings."),(0,a.kt)("li",{parentName:"ol"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"https://help.github.com/articles/configuring-two-factor-authentication-via-a-totp-mobile-app/"},"authorized GitHub 2FA wiki")," to enable two-factor authorization (2FA) on ",(0,a.kt)("a",{parentName:"li",href:"http://github.com/"},"Github"),'. When you set 2FA to "off", it will be delisted by the corresponding Apache committer write permission group until you set it up again. (',(0,a.kt)("strong",{parentName:"li"},"NOTE: Treat your recovery codes with the same level of attention as you would your password!"),")"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://gitbox.apache.org/setup/"},"GitBox Account Linking Utility")," to obtain write permission of the SeaTunnel project."),(0,a.kt)("li",{parentName:"ol"},"Follow this ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/SeaTunnel-website#how-to-add-a-new-committer"},"doc")," to update the website.")),(0,a.kt)("p",null,"If you would like to show up publicly in the Apache GitHub org, you need to go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/apache/people"},"Apache GitHub org people page"),",\nsearch for yourself, and choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Organization visibility")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Public"),"."),(0,a.kt)("h3",{id:"committer-rights-duties-and-responsibilities"},"Committer rights, duties, and responsibilities"),(0,a.kt)("p",null,"The SeaTunnel project doesn't require continuing contributions from you after you have become a committer, but we truly hope that you will continue to play a part in our community!"),(0,a.kt)("p",null,"As a committer, you could"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Review and merge the pull request to the master branch in the Apache repo. A pull request often contains multiple commits. Those commits ",(0,a.kt)("strong",{parentName:"li"},"must be squashed and merged")," into a single commit ",(0,a.kt)("strong",{parentName:"li"},"with explanatory comments"),". It is recommended for new committers to request recheck of the pull request from senior committers."),(0,a.kt)("li",{parentName:"ol"},"Create and push codes to the new branch in the Apache repo."),(0,a.kt)("li",{parentName:"ol"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"../How-to-release.md"},"release process")," to prepare a new release. Remember to confirm with the committer team\nthat it is the right time to create the release.")),(0,a.kt)("p",null,"The PPMC hopes that the new committer will take part in the release process as well as release voting, even though their vote will be regarded as ",(0,a.kt)("inlineCode",{parentName:"p"},"+1 no binding"),".\nBeing familiar with the release process is key to being promoted to the role of PPMC member."),(0,a.kt)("h2",{id:"project-management-committee"},"Project Management Committee"),(0,a.kt)("p",null,"The Project Management Committee (PPMC) member does not have any special rights in code contributions.\nThey simply oversee the project and make sure that it follows the Apache requirements. Its functions include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Binding voting for releases and license checks;"),(0,a.kt)("li",{parentName:"ol"},"New committer and PPMC member recognition;"),(0,a.kt)("li",{parentName:"ol"},"Identification of branding issues and brand protection; and"),(0,a.kt)("li",{parentName:"ol"},"Responding to questions raised by the ASF board, and taking necessary actions.")),(0,a.kt)("p",null,"The V.P. and chair of the PPMC is the secretary, who is responsible for initializing the board report."),(0,a.kt)("p",null,"In most cases, a new PPMC member is nominated from the committer team. But it is also possible to become a PPMC member directly, so long as the PPMC agrees to the nomination and is confident that the candidate is ready. For instance, this can be demonstrated by the fact that he/she has been an Apache member, an Apache officer, or a PPMC member of another project."),(0,a.kt)("p",null,"The new PPMC voting process should also follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"[DISCUSS]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"[VOTE]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"[RESULT][VOTE]")," procedures using a private mail list, just like the ",(0,a.kt)("a",{parentName:"p",href:"#new-committer-nomination"},"voting process for new committers"),".\nBefore sending the invitation, the PPMC ",(0,a.kt)("a",{parentName:"p",href:"http://www.apache.org/dev/PPMC.html#newPPMC"},"must also send a NOTICE mail to the Apache Incubator"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"To: private@incubator.apache.org\nCc: private@seatunnel.apache.org\nSubject: [NOTICE] Jane Doe for SeaTunnel PPMC\n\nSeaTunnel proposes to invite Jane Doe (janedoe) to join the PPMC.\n\n(include if a vote was held) The vote result is available here: https://lists.apache.org/...\n")),(0,a.kt)("p",null,"After 72 hours, if the board doesn't object to the nomination (which it won't most cases), an invitation may then be sent to the candidate."),(0,a.kt)("p",null,"Once the invitation is accepted, a PPMC member should add the new member to the official PPMC list through ",(0,a.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/roster/ppmc/seatunnel"},"roster"),"."))}u.isMDXComponent=!0}}]);