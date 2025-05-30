// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package preview

import (
	"testing"

	"github.com/apache/incubator-kie-tools/packages/sonataflow-operator/utils"

	"github.com/serverlessworkflow/sdk-go/v2/model"
	"github.com/stretchr/testify/assert"

	"github.com/apache/incubator-kie-tools/packages/sonataflow-operator/internal/controller/profiles/common"
	"github.com/apache/incubator-kie-tools/packages/sonataflow-operator/test"
)

func Test_deployWithBuildWorkflowState_isWorkflowChanged(t *testing.T) {
	workflow1 := test.GetBaseSonataFlow(t.Name())
	workflow2 := test.GetBaseSonataFlow(t.Name())
	workflow1.Status.FlowCRC, _ = utils.Crc32Checksum(workflow1.Spec.Flow)
	workflow2.Status.FlowCRC, _ = utils.Crc32Checksum(workflow2.Spec.Flow)
	deployWithBuildWorkflowState := &deployWithBuildWorkflowState{
		StateSupport: &common.StateSupport{C: test.NewSonataFlowClientBuilder().WithRuntimeObjects(workflow1).Build()},
	}

	hasChanged, err := deployWithBuildWorkflowState.isWorkflowChanged(workflow2)
	assert.NoError(t, err)
	assert.False(t, hasChanged)

	// change workflow2
	workflow2.Spec.Flow.Metadata = model.Metadata{
		"string": model.Object{
			StringValue: "test",
		},
	}

	hasChanged, err = deployWithBuildWorkflowState.isWorkflowChanged(workflow2)
	assert.NoError(t, err)
	assert.True(t, hasChanged)
}
