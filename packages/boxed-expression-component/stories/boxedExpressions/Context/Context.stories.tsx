/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { BoxedExpressionEditor, BoxedExpressionEditorProps } from "../../../src/BoxedExpressionEditor";
import { BoxedExpressionEditorStory, BoxedExpressionEditorStoryArgs } from "../../boxedExpressionStoriesWrapper";
import { Base as EmptyExpression } from "../../misc/Empty/EmptyExpression.stories";
import { DmnBuiltInDataType, generateUuid } from "../../../src/api";
import { CONTEXT_ENTRY_VARIABLE_MIN_WIDTH } from "../../../src/resizing/WidthConstants";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<BoxedExpressionEditorProps> = {
  title: "Boxed Expressions/Context",
  component: BoxedExpressionEditor,
  includeStories: /^[A-Z]/,
};
export default meta;
type Story = StoryObj<BoxedExpressionEditorStoryArgs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      "@_typeRef": undefined,
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "ContextEntry-1",
            "@_typeRef": undefined,
          },
          expression: undefined!,
        },
      ],
    },
    isResetSupportedOnRootExpression: true,
    widthsById: { "_35255561-88FA-4A78-9C3F-61855213EE0F": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH] },
  },
};

export const Readonly: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      "@_typeRef": undefined,
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "ContextEntry-1",
            "@_typeRef": undefined,
          },
          expression: {
            "@_id": generateUuid(),
            __$$element: "literalExpression",
            text: { __$$text: "readonly text" },
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: true,
    widthsById: { "_35255561-88FA-4A78-9C3F-61855213EE0F": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH] },
    isReadOnly: true,
  },
};

export const InstallmentCalculation: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": generateUuid(),
      "@_label": "Installment calculation",
      "@_typeRef": DmnBuiltInDataType.Number,
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Fee",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Fee",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "25" },
          },
        },
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Repayments",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Repayments",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: `(Amount*Rate/12) /\n(1-(1+Rate/12)**-Term)` },
          },
        },
        {
          "@_id": generateUuid(),
          // The result expression is a ContextEntry without variable
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Result Expression",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "Fee + Repayments" },
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: false,
  },
};

export const Customer: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": generateUuid(),
      "@_label": "Customer",
      "@_typeRef": "tCustomer",
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Name",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Name",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "Luiz" },
          },
        },
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "Age",
            "@_typeRef": DmnBuiltInDataType.Number,
          },
          expression: {
            __$$element: "literalExpression",
            "@_id": generateUuid(),
            "@_label": "Age",
            "@_typeRef": DmnBuiltInDataType.Number,
            text: { __$$text: "30" },
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: false,
  },
};

export const Nested: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,
    expression: {
      __$$element: "context",
      "@_id": "_35255561-88FA-4A78-9C3F-61855213EE0F",
      "@_label": "Expression Name",
      contextEntry: [
        {
          "@_id": generateUuid(),
          variable: {
            "@_id": generateUuid(),
            "@_name": "ContextEntry-1",
          },
          expression: {
            __$$element: "context",
            "@_id": "_5D97B484-8003-4323-AADB-AA4C6F3ECA73",
            "@_label": "Expression Name",
            contextEntry: [
              {
                "@_id": generateUuid(),
                variable: {
                  "@_id": generateUuid(),
                  "@_name": "ContextEntry-1",
                },
                expression: {
                  __$$element: "literalExpression",
                  "@_id": generateUuid(),
                  "@_label": "ContextEntry-1",
                  text: { __$$text: "" },
                },
              },
            ],
          },
        },
      ],
    },
    isResetSupportedOnRootExpression: false,
    widthsById: {
      "_35255561-88FA-4A78-9C3F-61855213EE0F": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],
      "_5D97B484-8003-4323-AADB-AA4C6F3ECA73": [CONTEXT_ENTRY_VARIABLE_MIN_WIDTH],
    },
  },
};
export const Client: Story = {
  render: (args) => BoxedExpressionEditorStory(),
  parameters: { exclude: ["dataTypes", "beeGwtService", "pmmlDocuments"] },
  args: {
    ...EmptyExpression.args,

    expression: {
      if: {
        expression: {
          text: { __$$text: 'World Region = "Asia"' },
          __$$element: "literalExpression",
          "@_id": "_CA44F978-C3A3-4D65-BABB-8BDA2FBB1074",
          "@_label": "Expression Name",
        },
        "@_id": "_3C702CE4-E5A0-4B6F-905D-C2621FFFA387",
      },
      then: {
        expression: {
          input: [
            {
              inputExpression: {
                text: { __$$text: "Credit Score" },
                "@_id": "_50BFCAF6-AEE0-402C-91D3-A9546CD4BC81",
                "@_typeRef": "Credit Score Rating",
              },
              "@_id": "_B12F7FA8-9907-48A2-9B01-7595E9C8D43A",
            },
            {
              inputExpression: {
                text: { __$$text: "DTI" },
                "@_id": "_FFEA1DEB-D31A-48A8-8451-491A8C1E2DD0",
                "@_typeRef": "number",
              },
              "@_id": "_1F3AE4C3-D3C2-424C-B132-D9501143A089",
            },
          ],
          output: [{ "@_id": "_8D34C459-12A1-4B1A-8591-AB6C8EC8E9E1" }],
          annotation: [{ "@_name": "Annotations" }],
          rule: [
            {
              inputEntry: [
                {
                  text: { __$$text: '"Poor"' },
                  "@_id": "_0D26008B-C8D4-400B-936E-648D1DFB7CA9",
                },
                {
                  text: { __$$text: "-" },
                  "@_id": "_06D3CE4B-671B-46AF-84C2-29670038B406",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "30" },
                  "@_id": "_0E6C7E14-E362-44B2-A831-0C380BD7654A",
                },
              ],
              annotationEntry: [{ text: { __$$text: "Reason" } }],
              "@_id": "_D1753442-03F0-414B-94F8-6A86182DF6EB",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: '"Fair"' },
                  "@_id": "_875471C5-6743-45DD-AFBA-42893FB37740",
                },
                {
                  text: { __$$text: "-" },
                  "@_id": "_C5FE1FA0-7D2A-4251-BB99-B43E35B8C1A4",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "20" },
                  "@_id": "_D4F64CB7-B3F1-4550-AFC4-C14BC2240B6B",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_F759D8D7-2AFA-4872-90EE-CE6C2C2ECCE7",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: '"Excellent"' },
                  "@_id": "_CFA144C6-2228-4228-84BD-B7C87BCC6337",
                },
                {
                  text: { __$$text: "-" },
                  "@_id": "_7914A8AD-BEF7-42F0-ACB2-C12CCCCBEF3C",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "10" },
                  "@_id": "_517FB94A-5B3D-47F5-9761-F75FE7E3163D",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_F80DB1EF-3360-451D-99A7-B1A44F953816",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: "-" },
                  "@_id": "_B56E1E09-9663-42F4-9E2D-074533454F93",
                },
                {
                  text: { __$$text: "> 40" },
                  "@_id": "_D40E86EF-AC12-49D9-BCAA-EAC367864C81",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "30" },
                  "@_id": "_280B8F10-F7B3-4CBC-BE97-D5B04476679B",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_0E219A89-961B-45D9-A902-35376C5BFBCF",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: "-" },
                  "@_id": "_F88460EB-CA53-4B2D-84AC-D7D28598B6BF",
                },
                {
                  text: { __$$text: "[20..40]" },
                  "@_id": "_8BD2109B-C099-4B45-9E5B-493ABD0452EB",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "20" },
                  "@_id": "_02694584-2554-4190-B72A-7FA834383D6D",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_E787BA51-E31D-449B-A432-50BE7466A15E",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: "-" },
                  "@_id": "_68D7E5C9-7196-47D2-A75C-73C482F85066",
                },
                {
                  text: { __$$text: "< 20" },
                  "@_id": "_7DE509BF-AA65-47F2-A71A-25464B9A7084",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "10" },
                  "@_id": "_6ADFA54C-91DD-47A2-8AA1-648B6A245393",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_DBBFEAEE-870A-4106-A2AA-12ABF2E31235",
            },
          ],
          __$$element: "decisionTable",
          "@_id": "_F0C607C4-3F4C-4DA8-977C-779D42CEEE40",
          "@_hitPolicy": "COLLECT",
          "@_label": "Risk Score",
          "@_aggregation": "SUM",
          "@_typeRef": "number",
        },
        "@_id": "_6481FF12-61B5-451C-B775-4143D9B6CD6B",
      },
      else: {
        expression: {
          input: [
            {
              inputExpression: {
                text: { __$$text: "Credit Score" },
                "@_id": "_2225BD43-C9C3-44EB-8E6C-4DD2696FCEDA",
                "@_typeRef": "Credit Score Rating",
              },
              "@_id": "_4C0C8F1D-18D1-40FD-ACD1-2D7A53234400",
            },
            {
              inputExpression: {
                text: { __$$text: "DTI" },
                "@_id": "_8E5C645B-838F-40F4-8DFF-07409F664F20",
                "@_typeRef": "number",
              },
              "@_id": "_90F143B7-C50D-4AEF-8290-984FE57C14F6",
            },
          ],
          output: [{ "@_id": "_D2D55686-7196-4B0F-8F24-AEB4EB3A8604" }],
          annotation: [{ "@_name": "Annotations" }],
          rule: [
            {
              inputEntry: [
                {
                  text: { __$$text: '"Poor"' },
                  "@_id": "_19587616-E067-4DFF-99BA-59A7D173AB4C",
                },
                {
                  text: { __$$text: "-" },
                  "@_id": "_B0FA4A09-34CC-4A1B-A01C-7EA2F477F33D",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "35" },
                  "@_id": "_F4B0CBC7-6A4C-4A1C-8082-DCA86E4F2BBE",
                },
              ],
              annotationEntry: [{ text: { __$$text: "Reason" } }],
              "@_id": "_9ACB96CD-73B2-4523-BD3B-F0C44C296CA8",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: '"Fair"' },
                  "@_id": "_FF5E3A89-D947-4CB1-A15E-03E81557AE5A",
                },
                {
                  text: { __$$text: "-" },
                  "@_id": "_2B21631A-FD6D-458F-9929-E91D8DEF3906",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "25" },
                  "@_id": "_4AAC6D2A-F451-4CAA-AAE3-6BCECF569E79",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_7D6AD529-585D-4B6F-B855-4E6DB2D4BD02",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: '"Excellent"' },
                  "@_id": "_769B0DEC-9F09-4F8F-8333-8A09EB2A929F",
                },
                {
                  text: { __$$text: "-" },
                  "@_id": "_CF1D6265-14B3-4ABE-B262-5D8C7DC23ADB",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "15" },
                  "@_id": "_6CFCB810-3A62-432D-BCCB-F2E1EC28602E",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_945A5471-9F91-4751-9D96-74978F6FB12B",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: "-" },
                  "@_id": "_0A60CB1B-B641-4105-8941-87A41F61082C",
                },
                {
                  text: { __$$text: "> 40" },
                  "@_id": "_C6A8F9A2-857F-48A7-AB70-F738A8FD0A75",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "35" },
                  "@_id": "_6D54764F-FAAC-4EA5-9AFA-E62149B4AD7B",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_B5F84A2E-C0E0-4519-B4D2-B189EE5199F6",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: "-" },
                  "@_id": "_E8ACAA23-08E2-41F5-A2BB-E64DAF66EC00",
                },
                {
                  text: { __$$text: "[20..40]" },
                  "@_id": "_EB4325E6-8887-4354-9826-F74F11F1E577",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "25" },
                  "@_id": "_B88E036E-2B7D-4E49-AAEB-D1CA7D347897",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_72D20020-52A8-4F54-AFDC-9523546F2D6D",
            },
            {
              inputEntry: [
                {
                  text: { __$$text: "-" },
                  "@_id": "_DCE17872-8248-482D-96D2-C20AB938ABAE",
                },
                {
                  text: { __$$text: "< 20" },
                  "@_id": "_8F4B74F2-C84B-4B8E-A135-245474551E07",
                },
              ],
              outputEntry: [
                {
                  text: { __$$text: "15\n" },
                  "@_id": "_1D97266B-E9F3-4488-920E-AA6622996A16",
                },
              ],
              annotationEntry: [{ text: { __$$text: "" } }],
              "@_id": "_654BBFBC-9B84-4BD8-9D0B-13E8DD1B9F5D",
            },
          ],
          __$$element: "decisionTable",
          "@_id": "_90551B34-27B5-4242-A806-6D29AFB6946A",
          "@_hitPolicy": "COLLECT",
          "@_label": "Risk Score",
          "@_aggregation": "SUM",
          "@_typeRef": "number",
        },
        "@_id": "_2CD02CB2-6B56-45C4-B461-405E89D45633",
      },
      __$$element: "conditional",
      "@_id": "_A80832EF-8F9C-4638-B5FB-047210860DF2",
      "@_label": "Risk Score",
      "@_typeRef": "number",
    },
    widthsById: {
      "_CA44F978-C3A3-4D65-BABB-8BDA2FBB1074": [232],
      "_F0C607C4-3F4C-4DA8-977C-779D42CEEE40": [60, 145, 118, 118, 240],
      "_90551B34-27B5-4242-A806-6D29AFB6946A": [60, 145, 118, 118, 240],
    },
  },
};
