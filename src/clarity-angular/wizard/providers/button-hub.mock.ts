/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class ButtonHubMock {
    public buttonClicked(type: string): string {
        return type;
    }
}
