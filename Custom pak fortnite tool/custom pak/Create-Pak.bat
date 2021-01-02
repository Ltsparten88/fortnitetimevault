@echo off
echo     PPPPP                    kkk        ttt                     lll 
echo     PP   P                   kk kk       ttt                    lll
echo     PPPPP        aaaaa       kkkk       ttttt ooooo ooooo       lll 
echo     PP           aa aa      kk kk       ttt  oo oo oo oo       lll 
echo     PP           aaaaa     kk  kk      tttt ooooo ooooo        lll 
echo                                  
echo                                                                                          
echo.
echo Discord.gg/GG8hfSj     YouTube : Drip
echo.

@if "%~1"=="" goto skip

@setlocal enableextensions
@pushd %~dp0
@echo "%~1\*.*" "..\..\..\*.*" >pathetac.txt
.\Custompak.exe "%~1.pak" -create=pathetac.txt
@popd
@pause