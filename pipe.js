def CalcExchanger_func(b):
    count = 0
    flag = True
    while flag and count < 100:
        ColdQ = 0
        HotQ = 0
        SectorsData12 = HC.AddShellSector_calc(T_SHELL_IN_field.value, SHELL_FROM_LEFT_field.value, MIN_SHELLSECTOR_field.value, HBData, PropsArray)
        count += 1
        for i in HC.STHE_Result[2]:
            ColdQ += i.HBD[3]['COLD']['Q']
            HotQ += i.HBD[3]['HOT']['Q']
        if HBData[3]['COLD']['Q'] <= ColdQ or HBData[3]['HOT']['Q'] <= HotQ:
            flag = False
            
    SectorsData12 = HC.AddLastShellSector_calc(T_SHELL_IN_field.value, SHELL_FROM_LEFT_field.value, HBData, PropsArray, last_length=LAST_SHELLSECTOR_field.value)
        
    HC.DrawSectors(multi[0], SectorsData12)
